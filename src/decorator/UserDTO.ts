import { createArgDecorator, IContext } from '@umajs/core';

export class UserDTO {
    uname:string;

    role:string;

    operator:number;
}

export const GetUser = createArgDecorator(
    (ctx: IContext) => {
        const user = new UserDTO();

        user.uname = ctx.param.uname;
        user.role = ctx.query.role || 'user';
        user.operator = ctx.uid || 10269;

        return user;
    },
);
