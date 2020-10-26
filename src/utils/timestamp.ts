import { Resource } from '@umajs/core';

@Resource('timestamp')
export default class Timestamp {
    getTimestamp(date: Date = new Date()) {
        return date.valueOf();
    }
}
