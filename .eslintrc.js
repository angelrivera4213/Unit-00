module.exports = {
    'extends': [
        'next/core-web-vitals',
        'eslint:recommended'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    },
    'ignorePatterns': ['node_modules/', 'dist/']
}
