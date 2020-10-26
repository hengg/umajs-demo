/* eslint-disable @typescript-eslint/no-unused-vars */
import { Result } from '@umajs/core';

export default {
    Require: {
        err({ key, ctx, tip, val }) {
            return Result.send(tip || `请求${key} 参数不能为空。入参值为${val}`, 403);
        },
    },
};
