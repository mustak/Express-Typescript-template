const config = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-base',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        quotes: ['error', 'single'],
        'no-console': { allow: ['warn', 'error'] },
        eqeqeq: ['error', 'always'],
    },
    root: true,
};

export default config;
