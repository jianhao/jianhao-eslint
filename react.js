const rules = require("./rules");

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    amd: false,
    mocha: false,
    jasmine: false,
  },
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["import", "simple-import-sort", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    ...rules,
    // 布尔型的 prop 的命名不强制限制要以 is 或 has 开头
    "react/boolean-prop-naming": 0,

    // button 元素允许有隐式的 type 属性
    "react/button-has-type": 0,

    // defaultProps 不强制要求写 propTypes
    "react/default-props-match-prop-types": 0,

    // props state context 必须用解构赋值
    "react/destructuring-assignment": [2, "always"],

    // 组件定义时不强制要求写 displayName
    "react/display-name": 0,

    // 允许在自定义组件中使用一些指定的props  (className style to Component)
    "react/forbid-component-props": 0,

    // 禁止在DOM节点上使用的props属性 （style类型禁止）
    "react/forbid-dom-props": [
      2,
      {
        forbid: ["style"],
      },
    ],

    // 允许使用一些指定的 elements
    "react/forbid-elements": 0,

    // 允许直接使用别的组建的 propTypes
    "react/forbid-foreign-prop-types": 0,

    // 不强制禁止使用一些指定的 propTypes
    "react/forbid-prop-types": 0,

    // 禁止在setState中使用this.state
    "react/no-access-state-in-setstate": 2,

    // 允许使用数组的index 作为key
    "react/no-array-index-key": 0,

    // 禁止使用props传递children
    "react/no-children-prop": 2,

    // 不强制禁止使用 dangerouslySetInnerHTML
    "react/no-danger": 0,

    // 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
    "react/no-danger-with-children": 2,

    // 禁止使用已废弃的 api
    "react/no-deprecated": 2,

    // 允许在 componentDidMount方法中使用setState
    "react/no-did-mount-set-state": 0,

    // 禁止在componentDidUpdate使用setState
    "react/no-did-update-set-state": 2,

    // 禁止直接修改 this.state
    "react/no-direct-mutation-state": 2,

    // 禁止使用 "findDOMNode"
    "react/no-find-dom-node": 2,

    // 禁止使用"isMounted"
    "react/no-is-mounted": 2,

    // 禁止每个文件中定义多个组件，忽略无状态组件
    "react/no-multi-comp": [2, { ignoreStateless: true }],

    // 禁止在 PureComponent 中使用 shouldComponentUpdate
    "react/no-redundant-should-component-update": 2,

    // 禁止使用"React.render"的返回值
    "react/no-render-return-value": 2,

    // 无状态组件中允许使用setState
    "react/no-set-state": 0,

    // 禁止拼写错误
    "react/no-typos": 2,

    // 禁止使用字符串 作为ref 属性的值
    "react/no-string-refs": 2,

    // 无状态组件中禁止使用this
    "react/no-this-in-sfc": 2,

    // 禁止在组件的内部存在未转义的 >, ", ' 或 }
    "react/no-unescaped-entities": 2,

    // 禁止使用未知的DOM属性
    "react/no-unknown-property": 2,

    // 禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate
    "react/no-unsafe": 2,

    // 禁止定义未使用的propTypes的属性
    "react/no-unused-prop-types": 2,

    // 定义过的 state 必须使用
    "react/no-unused-state": 2,

    // 禁止在'componentWillUpdate'中使用setState
    "react/no-will-update-set-state": 2,

    // 必须使用 Class 的形式创建组件
    "react/prefer-es6-class": [2, "always"],

    // 使用 Flow 时，props 允许设置为读写的
    "react/prefer-read-only-props": 0,

    // 不强制使用 pure function
    "react/prefer-stateless-function": 0,

    // 允许在react组件定义中缺少props验证
    "react/prop-types": 0,

    // 出现 jsx 的地方不强制导入 React
    // @reason: babel 针对 React@17 有了全新的转换："runtime": "automatic"
    "react/react-in-jsx-scope": 0,

    // 非 required 的 prop 不强制必须有 defaultProps
    "react/require-default-props": 0,

    // 不强制 React 组件必须拥有shouldComponentUpdate 方法
    "react/require-optimization": 0,

    // 强制ES5或ES6类在render函数中有返回值
    "react/require-render-return": 2,

    // 组件内没有 children 时，必须使用自闭和写法
    "react/self-closing-comp": 2,

    // 强制组件方法顺序
    "react/sort-comp": [
      2,
      {
        order: [
          "instance-variables",
          "static-methods",
          "lifecycle",
          "everything-else",
          "render",
        ],
      },
    ],

    // propTypes的顺序无须严格排序
    "react/sort-prop-types": 0,

    // 不强制在构造函数中初始化 state
    "react/state-in-constructor": 0,

    // 类的静态属性必须使用 static 关键字定义
    "react/static-property-placement": 2,

    // style 属性的取值必须是 object
    "react/style-prop-object": 2,

    // HTML 中的自闭和标签禁止有 children
    "react/void-dom-elements-no-children": 2,

    // JSX-specific rule
    //  布尔值的属性 不强制 显式的写 someprop={true}
    "react/jsx-boolean-value": 0,

    // 允许兄弟元素之间有空格
    "react/jsx-child-element-spacing": 0,

    // 自闭和标签的反尖括号必须与尖括号的那一行对齐
    "react/jsx-closing-bracket-location": [
      2,
      {
        nonEmpty: false,
        selfClosing: "line-aligned",
      },
    ],

    // 结束标签不强制必须与开始标签的那一行对齐
    "react/jsx-closing-tag-location": 0,

    // 限制 jsx 中的大括号内部首尾换行符
    // @reason 使用 prettier 的规则
    "react/jsx-curly-newline": 0,

    // 大括号内前后禁止有空格
    "react/jsx-curly-spacing": [
      2,
      {
        when: "never",
        allowMultiline: true,
        children: true,
        spacing: {
          objectLiterals: "never",
        },
      },
    ],

    // props 与 value 之间的等号前后禁止有空格
    "react/jsx-equals-spacing": [2, "never"],

    // JSX 不强制限制文件后缀
    "react/jsx-filename-extension": 0,

    // 第一个 prop 不要求必须换行
    "react/jsx-first-prop-new-line": 0,

    // handler 的名称 不强制 必须是 onXXX 或 handleXXX
    "react/jsx-handler-names": 0,

    // jsx 的 children 缩进必须为两个空格
    "react/jsx-indent": [2, 2],

    // jsx 的 props 缩进必须为四个空格
    "react/jsx-indent-props": [2, 2],

    // 验证数组中或迭代器中的key属性
    "react/jsx-key": 2,

    // 不强加限制 jsx 层级
    "react/jsx-max-depth": 0,

    // 不强加限制单行的最大属性数量
    "react/jsx-max-props-per-line": 0,

    // jsx 中 允许 使用 bind
    "react/jsx-no-bind": 0,

    // 阻止文本节点中插入注释
    "react/jsx-no-comment-textnodes": 2,

    // JSX 避免重复属性
    "react/jsx-no-duplicate-props": 2,

    // 允许在 jsx 中出现字符串
    "react/jsx-no-literals": 0,

    // 允许使用不安全的target=_blank属性
    "react/jsx-no-target-blank": 0,

    // 禁止使用未定义的 jsx elemet
    "react/jsx-no-undef": 2,

    // 不强加限制单行的表达式数量
    "react/jsx-one-expression-per-line": 0,

    // 禁止 jsx 中使用无用的引号
    "react/jsx-curly-brace-presence": [2, "never"],

    // 必须使用 <></> 而不是 React.Fragment
    "react/jsx-fragments": [2, "syntax"],

    // 用户自定义的组件强制使用PascalCase命名法
    "react/jsx-pascal-case": 2,

    // 内联属性之间避免出现多个空格
    "react/jsx-props-no-multi-spaces": 2,

    // 不强制禁止使用 {...props}
    "react/jsx-props-no-spreading": 0,

    // 默认属性 无须 严格排序
    "react/jsx-sort-default-props": 0,

    // 属性 无须 严格排序
    "react/jsx-sort-props": 0,

    // 不强加 验证比标签前面的空格
    "react/jsx-space-before-closing": 0,

    // jsx 的开始和闭合处禁止有空格
    "react/jsx-tag-spacing": [
      2,
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
      },
    ],

    // jsx 文件必不强制导入 React
    // @reason: babel 针对 React@17 有了全新的转换："runtime": "automatic"
    "react/jsx-uses-react": 0,

    // 定义了的 jsx element 必须使用
    "react/jsx-uses-vars": 2,

    // 多行JSX不强制使用圆括号扩起来
    "react/jsx-wrap-multilines": 0,

    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks deps of Hooks
  },
};
