module.exports = {
    extends: 'stylelint-config-sass-guidelines',
    rules: {
        indentation: 'tab',
        'scss/dollar-variable-pattern': new RegExp(/^[_]?[a-z]+([a-z0-9_-]+[a-z0-9]+)?$/),
        'selector-no-qualifying-type': [true, { ignore: ['id', 'class'] }],
        'order/properties-alphabetical-order': null,
        'max-nesting-depth': [3, { ignore: ['pseudo-classes'] }]
    }
};
