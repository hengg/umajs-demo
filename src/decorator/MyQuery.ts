import { createArgDecorator, IContext } from '@umajs/core';

export const MyQuery = createArgDecorator(
    (ctx: IContext, key: string) => ctx.query[key],
);
