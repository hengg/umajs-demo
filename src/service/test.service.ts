import { BaseService, Resource } from '@umajs/core';

@Resource()
export default class test extends BaseService {
    returnFrameName() {
        return 'Umajs';
    }
}
