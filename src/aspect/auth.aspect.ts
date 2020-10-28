import { IAspect, IProceedJoinPoint, Result } from '@umajs/core';

/* eslint-disable */
export default class implements IAspect {
    
    async around(proceedPoint: IProceedJoinPoint<any>) {
        const { proceed, args,target } = proceedPoint;
        // 模拟权限检查
        if(target.ctx.uid===undefined){
            return Result.json({
                code: -1,
                message: '您暂无权限'
            })
        }

        const result = await proceed(...args);

        return result;
    }
}