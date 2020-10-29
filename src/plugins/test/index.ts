import { Uma, IContext, TPlugin, RequestMethod } from '@umajs/core';

import mw from '../../utils/mw';

export default (uma: Uma, options: any = {}): TPlugin => {
    console.log(options);

    return {
        context: {
            test: 123,
        },
        use: {
            handler: mw,
        },
        method: {
            type: RequestMethod.GET,
            async handler(ctx: IContext, next: Function) {
                console.log('method get before');
                await next();
                console.log('method get after');
            },
        },
    };
};
