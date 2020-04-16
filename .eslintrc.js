module.exports = {
    root: true,
    extends: [
        '@nuxtjs',
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    rules: {
        // override/add rules settings here, such as:
        'indent': ['error', 4],
        'semi': [1, 'always'],
        'vue/script-indent': ['error', 4, {'baseIndent': 0}],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        'vue/no-unused-vars': 'error',
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-tabs': 0,
        'vue/no-use-v-if-with-v-for': 'off'
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    }
};
