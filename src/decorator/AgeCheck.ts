import { createArgDecorator, Result, IContext } from '@umajs/core';

export const AgeCheck = createArgDecorator((ctx: IContext, ageKey: string) => {
    let age = ctx.query[ageKey];

    if (age === undefined) {
        return Result.json({
            code: 0,
            msg: '请加上 age 参数',
        });
    }

    age = +age;

    if (Number.isNaN(age) || age < 0 || age > 120) {
        return Result.json({
            code: 0,
            msg: '请传入正确的 age 参数',
        });
    }

    return age;
});
