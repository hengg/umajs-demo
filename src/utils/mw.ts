export default async (ctx, next) => {
    console.log('****** use mw as plugin before ******');
    await next();
    console.log('****** use mw as plugin after *******');
};
