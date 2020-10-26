import { IAspect, IProceedJoinPoint, Result } from '@umajs/core';

/* eslint-disable */
export default class implements IAspect {
    
    async around(proceedPoint: IProceedJoinPoint<any>) {
        // 模拟权限检查
        if(proceedPoint.target.ctx.uid===undefined){
            return Result.json({
                code: -1,
                message: '您暂无权限'
            })
        }

        const result = await proceedPoint.proceed();

        return result;
    }
}