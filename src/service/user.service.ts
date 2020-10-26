import { BaseService } from '@umajs/core';
import { UserDTO } from '../decorator/UserDTO';

export default class UserService extends BaseService {
    getUserById(id: string, stamp:number) {
        // 从第三方系统查询略
        const data = { id, stamp };

        return data;
    }

    addUser(dto: UserDTO) {
        console.log(dto);

        return dto;
    }
}
