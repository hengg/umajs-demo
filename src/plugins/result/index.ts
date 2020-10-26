import { IContext, TPlugin, Result as R } from '@umajs/core';

type TRedirect2 = {
    url: string,
    status: number,
}

export class Result extends R {
    static redirect2(url: string, status: number) {
        return new Result({
            type: 'redirect2',
            data: {
                url,
                status,
            },
        });
    }
}

export default (): TPlugin => ({
    results: {
        redirect2(ctx: IContext, data: TRedirect2) {
            const { url, status } = data;

            ctx.redirect(url);
            ctx.status = status;
        },
    },
});
