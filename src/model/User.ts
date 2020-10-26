// import { Resource } from '@umajs/core';

// @Resource('user', 'normal')
export default class User {
    constructor(
        readonly name: string,
        readonly role: string,
    ) {}

    getAge() {
        return this.role;
    }
}
