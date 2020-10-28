import { Resource } from '@umajs/core';

@Resource()
export default class Timestamp {
    getTimestamp(date: Date = new Date()) {
        return date.valueOf();
    }
}
