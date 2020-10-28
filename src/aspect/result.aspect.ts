import { IAspect, Inject, IProceedJoinPoint } from '@umajs/core';
import Timestamp from '../utils/timestamp';

/* eslint-disable */
export default class implements IAspect {
    @Inject(Timestamp)
    timestamp: Timestamp;

    async around(proceedPoint: IProceedJoinPoint<any>) {
        const { proceed, args } = proceedPoint;
        const result = await proceed(...args);
        result.stamp = this.timestamp.getTimestamp();

        return result;
    }
}
