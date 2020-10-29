import { BaseController, Path, Aspect, Query, Result } from '@umajs/core';

@Path('/tpl')
export default class Template extends BaseController {
    index() {
        return Result.send('this is index router in template');
    }

    @Aspect.around('mw')
    @Path('/test')
    test(@Query('name') name: string) {
        console.log('hi tpl test', name);

        return Result.send('this is static router in template');
    }

    @Path('/ns')
    @Aspect('result')
    notSend() {
        console.log('.....This will not send any msg...');
        this.ctx.body = 'emmmm';

        return Result.done();
    }
}
