const rules = require('./rules');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue'],
  rules: {
    ...rules,
    // Base rules

    // 在 template 里支持禁止规则指令的注释
    'vue/comment-directive': 2,

    // 防止 JSX 中使用的变量标记为未使用
    'vue/jsx-uses-vars': 2,

    // Essential

    // 不允许计算属性里出现异步操作，如： Promise setInterval ajax await
    'vue/no-async-in-computed-properties': [2],

    // 不允许重复字段名称
    'vue/no-dupe-keys': 2,

    // 禁止重复属性，排除 class 和 style
    'vue/no-duplicate-attributes': [2, {
      'allowCoexistClass': true,
      'allowCoexistStyle': true
    }],

    // 禁止 <template> 里的解析错误
    'vue/no-parsing-error': [2, {
      'abrupt-closing-of-empty-comment': true,
      'absence-of-digits-in-numeric-character-reference': true,
      'cdata-in-html-content': true,
      'character-reference-outside-unicode-range': true,
      'control-character-in-input-stream': true,
      'control-character-reference': true,
      'eof-before-tag-name': true,
      'eof-in-cdata': true,
      'eof-in-comment': true,
      'eof-in-tag': true,
      'incorrectly-closed-comment': true,
      'incorrectly-opened-comment': true,
      'invalid-first-character-of-tag-name': true,
      'missing-attribute-value': true,
      'missing-end-tag-name': true,
      'missing-semicolon-after-character-reference': true,
      'missing-whitespace-between-attributes': true,
      'nested-comment': true,
      'noncharacter-character-reference': true,
      'noncharacter-in-input-stream': true,
      'null-character-reference': true,
      'surrogate-character-reference': true,
      'surrogate-in-input-stream': true,
      'unexpected-character-in-attribute-name': true,
      'unexpected-character-in-unquoted-attribute-value': true,
      'unexpected-equals-sign-before-attribute-name': true,
      'unexpected-null-character': true,
      'unexpected-question-mark-instead-of-tag-name': true,
      'unexpected-solidus-in-tag': true,
      'unknown-named-character-reference': true,
      'end-tag-with-attributes': true,
      'duplicate-attribute': true,
      'end-tag-with-trailing-solidus': true,
      'non-void-html-element-start-tag-with-trailing-solidus': false,
      'x-invalid-end-tag': true,
      'x-invalid-namespace': true
    }],

    // 禁止覆盖保留关键字
    'vue/no-reserved-keys': 2,

    // 强制属性 data 的值必须是个函数
    'vue/no-shared-component-data': 2,

    // 禁止计算属性里存在副作用
    'vue/no-side-effects-in-computed-properties': 2,

    // 禁止 template 上设置 key
    'vue/no-template-key': 2,

    // 禁止 textarea 标签里出现 mustache 写法
    'vue/no-textarea-mustache': 2,

    // 不允许出现未使用的组件
    'vue/no-unused-components': 2,

    // 禁止在 v-for 指令或局部属性中出现未使用的变量
    'vue/no-unused-vars': 2,

    // 禁止 v-for 和 v-if 指令同时出现。排除 v-if 需要用到 v-for 指令中的引用时
    // @reason 可以考虑 v-if 写到父组件中，或者用计算属性
    'vue/no-use-v-if-with-v-for': [2, {
      'allowUsingIterationVar': true
    }],

    // component 组件必须要绑定 is 属性
    'vue/require-component-is': 2,

    // 验证 prop 的类型时，必须是用构造函数
    'vue/require-prop-type-constructor': 2,

    // 要求 render 函数必须有返回值
    'vue/require-render-return': 2,

    // 要求使用 v-for 指令时，必须指定 key
    'vue/require-v-for-key': 2,

    // 要求 prop 类型的默认值必须符合校验规则
    'vue/require-valid-default-prop': 2,

    // 强制计算属性有返回语句
    'vue/return-in-computed-property': 2,

    // 当存在另一个带修饰符的 v-on 时，强制在 v-on 上使用精确修饰符
    'vue/use-v-on-exact': 2,

    // 强制校验 template 的根节点
    'vue/valid-template-root': 2,

    // 强制校验 v-bind 指令
    'vue/valid-v-bind': 2,

    // 强制校验 v-cloak 指令
    'vue/valid-v-cloak': 2,

    // 强制校验 v-else-if 指令
    'vue/valid-v-else-if': 2,

    // 强制校验 v-else 指令
    'vue/valid-v-else': 2,

    // 强制校验 v-for 指令
    'vue/valid-v-for': 2,

    // 强制校验 v-html 指令
    'vue/valid-v-html': 2,

    // 强制校验 v-if 指令
    'vue/valid-v-if': 2,

    // 强制校验 v-model 指令
    'vue/valid-v-model': 2,

    // 强制校验 v-on 指令
    'vue/valid-v-on': 2,

    // 强制校验 v-once 指令
    'vue/valid-v-once': 2,

    // 强制校验 v-pre 指令
    'vue/valid-v-pre': 2,

    // 强制校验 v-show 指令
    'vue/valid-v-show': 2,

    // 强制校验 v-text 指令
    'vue/valid-v-text': 2,

    // Strongly Recommended

    // 在模板语言中，强制自定义组件的 prop 命名样式为 hyphenation 连字符
    'vue/attribute-hyphenation': [2, 'always'],

    // 标签的闭合括号，单行时不换行，多行时要求换行
    'vue/html-closing-bracket-newline': [2, {
      'singleline': 'never',
      'multiline': 'always'
    }],

    // 统一的标签闭合空白
    'vue/html-closing-bracket-spacing': [2, {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],

    // 强制闭合标签样式
    'vue/html-end-tags': 2,

    // 在 template 中强制统一的缩进
    'vue/html-indent': [2, 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],

    // 强制 HTML 属性的引号为双引号
    'vue/html-quotes': [2, 'double'],

    // 强制一致的 html 标签闭合风格
    'vue/html-self-closing': [2, {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],

    // 每行做多的属性限定
    'vue/max-attributes-per-line': [2, {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],

    // html 元素里有多行内容时，限制前后空白行
    'vue/multiline-html-element-content-newline': [2, {
      'ignoreWhenEmpty': true,
      'allowEmptyLines': false,
      'ignores': ['pre', 'textarea']
    }],

    // 在 Mustache 插值中强制统一的间距
    'vue/mustache-interpolation-spacing': [2, 'always'],

    // name 属性统一为大驼峰式写法
    'vue/name-property-casing': [2, 'PascalCase'],

    // 不允许多个空白
    'vue/no-multi-spaces': [2, {
      'ignoreProperties': false
    }],

    // 禁止属性中等号周围的空格
    'vue/no-spaces-around-equal-signs-in-attribute': 2,

    // 禁止 template 中出现外部作用域下的变量
    'vue/no-template-shadow': 2,

    // 不限制组件 prop 的命名规范
    // @reason 因为有些字段保持和后端一直更方便些
    'vue/prop-name-casing': 0,

    // 强制 prop 必须设置默认值
    'vue/require-default-prop': 2,

    // 强制 prop 必须设置类型
    'vue/require-prop-types': 2,

    // 元素内容和标签需要换行显示
    'vue/singleline-html-element-content-newline': [2, {
      'ignoreWhenNoAttributes': true,
      'ignoreWhenEmpty': true,
      'ignores': ['pre', 'textarea']
    }],

    // 强制 v-bind 指令的写法风格：简写
    'vue/v-bind-style': [2, 'shorthand'],

    // 强制 v-on 指令的写法风格：简写
    'vue/v-on-style': [2, 'shorthand'],

    // Recommended

    // 强制属性的书写顺序
    // @note 略严格，可以通过 --fix 来修复
    'vue/attributes-order': [2, {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],

    // 禁用 v-html 指令，防止 XSS 攻击
    'vue/no-v-html': 2,

    // 强制组件属性的书写顺序
    // @note 略严格，可以通过 --fix 来修复
    'vue/order-in-components': [2, {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],

    // 禁止在 template 中使用 this
    'vue/this-in-template': 2,

    // Uncategorized

    // <template> 禁止数组括号内的多余空格
    'vue/array-bracket-spacing': [2, 'never'],

    // <template> 要求箭头函数的箭头之前或之后有空格
    'vue/arrow-spacing': [2, {
      'before': true,
      'after': true
    }],

    // <template> 强制在代码块中开括号前和闭括号后有空格
    'vue/block-spacing': [2, 'always'],

    // <template> 大括号风格要求：if else / try catch
    'vue/brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],

    // 不要求变量使用骆驼拼写法
    // @reason 后端返回的字段可能是下划线格式，为了方便解构和传参，关闭此规则
    'vue/camelcase': 0,

    // <template> 禁止使用拖尾逗号
    'vue/comma-dangle': [2, 'never'],

    // <template> 组件名的书写规范为 kebab-case
    // @reason 保持和 ElementUI 一致
    'vue/component-name-in-template-casing': [2, 'kebab-case', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],

    // <template> 链式操作时，点的位置，强制在之前和之后一致的换行
    // 'vue/dot-location': [2, 'property'],

    // <template> 要求使用 === 和 !== ，和 null 比较时除外
    'vue/eqeqeq': [2, 'always', {
      'null': 'ignore'
    }],

    // <template> 强制在对象字面量的属性中键和值之间使用一致的间距
    'vue/key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],

    // <template> 强制在关键字前后使用一致的空格
    // 'vue/keyword-spacing': [2, {
    //   'before': true,
    //   'after': true
    // }],

    // 不要求 name 值和文件名保持一致
    // @reason 因为有些文件名可能是 index 。
    // 解决上面的方法也可以是 index 只导出，不写组件，组件单独成一个文件。
    // 名称最好保持一致，暂不限制。
    'vue/match-component-file-name': 0,

    // 类型为 Boolean 值的 prop 也需要设置默认值
    'vue/no-boolean-default': 0,

    // <template> 允许使用 scope 属性
    // @reason 2.5.0+ 版本弃用了 scope 属性，但有些项目版本要低些
    'vue/no-deprecated-scope-attribute': 0,

    // <template> 禁止使用空解构模式：[] 或 {}
    // 'vue/no-empty-pattern': 2,

    // 禁用特定的语法
    // @reason 暂时没有
    'vue/no-restricted-syntax': 0,

    // <template> 强制在大括号中使用一致的空格
    'vue/object-curly-spacing': [2, 'always', {
      'objectsInObjects': false
    }],

    // 要求组件要直接导出
    'vue/require-direct-export': 2,

    // <template> 要求操作符周围有空格
    'vue/space-infix-ops': 2,

    // 强制在一元操作符前后使用一致的空格
    'vue/space-unary-ops': [2, {
      'words': true,
      'nonwords': false,
    }],

    // <template> 不限制 v-on 指令的值调用函数
    // @reason 业务需求，有时直接调用函数并传参很方便
    'vue/v-on-function-call': 0
  }
};
