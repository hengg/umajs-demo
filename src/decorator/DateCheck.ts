import { createArgDecorator, IContext } from '@umajs/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function yyyymmddToTimestamp(date:string) {
    return 123;
}

export const DateCheck = createArgDecorator(
    (ctx: IContext, dateKey: string) => {
        const yyyymmdd = ctx.query[dateKey];

        return yyyymmddToTimestamp(yyyymmdd);
    },
);
