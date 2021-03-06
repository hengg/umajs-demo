/* eslint-disable quote-props */
export default {
    'result': true,
    'static': {
        options: {
            root: './static',
            opts: {
            },
        },
    },
    'i18n': {
        enable: true,
        name: 'i18n',
        options: {
            defaultLocale: 'zh-cn',
        },
    },
    'status': true,
    'test': true,
    'views': {
        options: {
            root: './views',
            opts: {
                map: { html: 'nunjucks' },
            },
        },
    },
};
