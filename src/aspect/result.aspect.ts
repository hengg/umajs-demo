import { IAspect, Inject, IProceedJoinPoint } from '@umajs/core';
import Timestamp from '../utils/timestamp';

/* eslint-disable */
export default class implements IAspect {
    @Inject('timestamp')
    timestamp: Timestamp;

    async around(proceedPoint: IProceedJoinPoint<any>) {
        const result = await proceedPoint.proceed();
        const stamp = this.timestamp.getTimestamp();

        return { ...result, stamp };
    }
}
