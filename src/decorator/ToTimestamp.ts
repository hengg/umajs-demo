import { createArgDecorator, IContext } from '@umajs/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function yyyymmddToTimestamp(date:string) {
    return new Date(date).valueOf();
}

export const ToTimestamp = createArgDecorator(
    (ctx: IContext, dateKey: string) => {
        const yyyymmdd = ctx.query[dateKey];

        return yyyymmddToTimestamp(yyyymmdd);
    },
);
