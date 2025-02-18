export default [
  // Global variables
  {
    languageOptions: {
      globals: {
        console: true,
        customElements: true,
        document: true,
        HTMLElement: true,
      },
    },
  },

  // Global settings
  {
    files: ['**/*.js'],
    settings: {
      react: {
        // removes warning "React version not specified in eslint-plugin-react settings"
        version: 'detect',
      },
    },
  },

  // Ground rules
  {
    // inspired by:
    // - https://github.com/eslint/eslint/blob/dd58cd4afa6ced9016c091fc99a702c97a3e44f0/conf/eslint-recommended.js#L14-L74
    // - https://github.com/suchipi/eslint-config-unobtrusive/blob/744a7f23a549c3dcf0a35a0d43372a268af4f028/index.js
    rules: {
      'constructor-super': 'error',
      'for-direction': 'error',
      'getter-return': 'error',
      'no-case-declarations': 'warn',
      'no-class-assign': 'warn',
      'no-compare-neg-zero': 'warn',
      // https://github.com/suchipi/eslint-config-unobtrusive/blob/744a7f23a549c3dcf0a35a0d43372a268af4f028/index.js#L43-L52
      'no-cond-assign': ['warn', 'except-parens'],
      'no-const-assign': 'error',
      // https://github.com/suchipi/eslint-config-unobtrusive/blob/744a7f23a549c3dcf0a35a0d43372a268af4f028/index.js#L58-L63
      'no-constant-condition': ['warn', { checkLoops: false }],
      'no-debugger': 'warn',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error', // Note: has a TS extension
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'warn',
      'no-empty-function': 'warn', // Note: has a TS extension
      'no-empty-pattern': 'warn',
      'no-ex-assign': 'warn',
      'no-func-assign': 'warn',
      'no-global-assign': 'error',
      'no-import-assign': 'error',
      'no-invalid-regexp': 'error',
      'no-loss-of-precision': 'warn', // Note: has a TS extension
      'no-misleading-character-class': 'warn',
      'no-new-native-nonconstructor': 'error',
      'no-nonoctal-decimal-escape': 'warn',
      'no-obj-calls': 'error',
      'no-octal': 'error',
      'no-redeclare': 'warn', // Note: has a TS extension
      'no-self-assign': 'warn',
      'no-setter-return': 'warn',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'warn',
      'no-this-before-super': 'error',
      'no-undef': 'error',
      'no-unexpected-multiline': 'warn',
      'no-unreachable': 'warn',
      'no-unsafe-finally': 'warn',
      'no-unsafe-negation': 'warn',
      'no-unsafe-optional-chaining': 'warn',
      // typically represents an unfinished assignment
      // https://github.com/facebook/create-react-app/blob/a422bf227cf5294a34d68696664e9568a152fd8f/packages/eslint-config-react-app/index.js#L167-L174
      // Note: has a TS extension
      'no-unused-expressions': [
        'warn',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      'no-unused-labels': 'warn',
      // rest siblings are fine
      // https://github.com/facebook/create-react-app/blob/a422bf227cf5294a34d68696664e9568a152fd8f/packages/eslint-config-react-app/index.js#L176-L182
      // Note: has a TS extension
      'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
      // https://github.com/facebook/create-react-app/blob/a422bf227cf5294a34d68696664e9568a152fd8f/packages/eslint-config-react-app/index.js#L183-L190
      // Note: has TS extension
      'no-use-before-define': ['warn', { functions: false, classes: false, variables: false }],
      'no-useless-backreference': 'warn',
      'no-useless-escape': 'warn',
      'no-with': 'error',
      'require-yield': 'warn',
      'use-isnan': 'warn',
      // https://github.com/suchipi/eslint-config-unobtrusive/blob/744a7f23a549c3dcf0a35a0d43372a268af4f028/index.js#L217-L225
      'valid-typeof': ['warn', { requireStringLiterals: false }],
    },
  },
];
