import * as fs from 'fs';
import * as path from 'path';
import {
    BaseController,
    Path,
    Private,
    Param,
    Query,
    RequestMethod,
    Aspect,
    Service,
    Inject,
} from '@umajs/core';
import { Body, Require } from '@umajs/arg-decorator';
import UserService from '../service/user.service';
import { AgeCheck } from '../decorator/AgeCheck';
import { MyQuery } from '../decorator/MyQuery';
import { GetUser, UserDTO } from '../decorator/UserDTO';
import Timestamp from '../utils/timestamp';
import { Result } from '../plugins/result/index';
import { ToTimestamp } from '../decorator/ToTimestamp';

@Aspect.before('test')
export default class Index extends BaseController {
    // 注入自定义的工具类实例
    @Inject(Timestamp)
    timestamp: Timestamp;

    // 快捷注入service 实例
    @Service(UserService)
    userService: UserService;

    // Result.view
    index() {
        return Result.view('index.html');
    }

    // 私有方法
    @Private
    inline() {
        return Result.send('this is private router');
    }

    @Path('/age')
    age(@AgeCheck('age') age: number, @ToTimestamp('date') stamp: string) {
        return Result.send(`stamp is ${stamp}, age is ${age}`);
    }

    /**
     * - 通过 @Path 装饰器进行路由传参
     * - 使用 @Param 装饰器快捷获取路由参数
     * - 使用 @AgeCheck 自定义装饰器检查参数
     * - 使用 @Aspect.around('test') 装饰器指定切面方法
     * */
    @Path('/reg/:name*')
    @Aspect.around('test')
    reg(@AgeCheck('age') age: number, @Param('name') name: string) {
        return Result.send(`this is reg router. ${name} ${age}`);
    }

    /**
     * - 通过 @Path 装饰器指定多个路径、指定请求类型
     * - 使用 @Body 装饰器快捷获取 POST 请求参数
     * */
    @Path({
        value: ['/submit', '/yu/:id', '/mr'],
        method: RequestMethod.POST,
    })
    submit(@Body('age') age: string) {
        // 也可以通过 ctx.request.body 获取 post body
        console.log(this.ctx.request.body);

        return Result.send(`$submit success, age is ${age}`);
    }

    // 通过 @Path 装饰器指定多个路径
    @Path('/test', '/static/test2')
    test() {
        return Result.send('this is static router');
    }

    /**
     * 使用 @Require 装饰器获取 query 参数并且做必填校验
     * 用于检查的内置装饰器第二个参数 tip 为提示信息，非必填项
     * src/config/argDecorator.config.ts 内可以自定义校验失败的返回信息
     * 提示信息优先级 tip>config>default
     */
    @Path({
        method: RequestMethod.GET,
    })
    onlyGet(@Require('url', '跳转的 url 未定义') url:string) {
        // 使用扩展后的 Result 进行带状态码的重定向
        return Result.redirect2(url, 301);
    }

    /**
     * - 使用 @Query 装饰器快捷获取 query 参数
     * */
    @Aspect('auth')
    @Path('/users/:id')
    getUser(@Param('id') uid: string, @Query('role') role: string) {
        const stamp = this.timestamp.getTimestamp();
        const user = this.userService.getUserById(uid, stamp);

        return Result.json({ ...user, role });
    }

    /**
     * - 使用自定义装饰器 @MyQuery 快捷获取 query 参数
     * */
    @Path('/users2/:id')
    getUser2(@Param('id') uid: string, @MyQuery('role') role: string) {
        // 查询过程略
        return Result.json({ uid, role });
    }

    /**
     * - 使用自定义装饰器 @GetUser 快捷聚合 UserDTO 参数
     * */
    @Path('/user/:uname')
    addUser(@GetUser() dto: UserDTO) {
        const data = this.userService.addUser(dto);

        return Result.json(data);
    }

    @Path('/download')
    downFile() {
        return Result.download('/src/controller/template.controller.ts');
    }

    @Path('/stream')
    donwStream() {
        const rs = fs.createReadStream(path.resolve(__dirname, './template.controller.ts'));

        return Result.stream(rs, 'controller.ts');
    }
}
