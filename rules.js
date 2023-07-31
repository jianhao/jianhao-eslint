module.exports = {
  // 强制 getter 和 setter 在对象中成对出现
  "accessor-pairs": 2,

  // 在数组开括号后和闭括号前强制换行
  "array-bracket-newline": 0,

  // 禁止在数组括号内使用空格
  "array-bracket-spacing": [2, "never"],

  // 强制数组方法的回调函数中有 return 语句
  "array-callback-return": 2,

  // 强制数组元素间出现换行
  "array-element-newline": 0,

  // 把 var 语句看作是在块级作用域范围之内
  "block-scoped-var": 2,

  // 强制在代码块中开括号前和闭括号后有空格
  "block-spacing": [2, "always"],

  // 大括号风格要求：if else / try catch
  "brace-style": [
    2,
    "1tbs",
    {
      allowSingleLine: true,
    },
  ],

  // 不要求变量使用骆驼拼写法
  // @reason 后端返回的字段可能是下划线格式，为了方便解构和传参，关闭此规则
  camelcase: 0,

  // 对注释的第一个字母大写
  "capitalized-comments": 0,

  // 强制类方法使用 this
  // class 的非静态方法必须包含 this 关键字
  "class-methods-use-this": 2,

  // 禁止使用拖尾逗号
  "comma-dangle": [2, "never"],

  // 强制在逗号周围使用空格
  "comma-spacing": [
    2,
    {
      before: false,
      after: true,
    },
  ],

  // 逗号风格：逗号写在行首还是行尾
  "comma-style": [2, "last"],

  // 限制圈复杂度：禁止函数 if ... else if ... else 的复杂度超过的次数
  complexity: [2, 20],

  // 禁止在计算属性中使用空格：使用方括号访问对象属性时，方括号前后的空格规则
  "computed-property-spacing": [2, "never"],

  // 要求使用一致的 return 语句
  "consistent-return": 0,

  // 要求一致的 This
  "consistent-this": [2, "self", "that"],

  // 强制所有控制语句使用一致的括号风格
  curly: [2, "multi-line"],

  // 要求 switch 语句中有 default 分支
  "default-case": 2,

  // 链式操作时，点的位置，强制在之前和之后一致的换行
  "dot-location": [2, "property"],

  // 要求文件末尾存在空行
  "eol-last": 2,

  // 要求使用 === 和 !== ，和 null 比较时除外
  eqeqeq: [
    2,
    "always",
    {
      null: "ignore",
    },
  ],

  // 强制 “for” 循环中更新子句的计数器朝着正确的方向移动
  "for-direction": 2,

  // 禁止在函数标识符和其调用之间有空格
  "func-call-spacing": [2, "never"],

  // 要求函数名与赋值给它们的变量名或属性名相匹配
  "func-name-matching": [2, "always"],

  // 使用命名的 function 表达式
  "func-names": 0,

  // 一致地使用 function 声明或表达式
  "func-style": 0,

  // 强制在函数括号内使用一致的换行
  "function-paren-newline": 2,

  // 不强制模块内的 import 排序
  "sort-imports": 0,

  // 强制 getter 函数中出现 return 语句
  "getter-return": [
    2,
    {
      allowImplicit: true,
    },
  ],

  // for in循环时，要求有一个 if 语句来检测 hasOwnProperty
  "guard-for-in": 2,

  // 禁止使用指定的标识符
  "id-blacklist": 0,

  // 标识符的最小和最大长度
  "id-length": 0,

  // 标识符匹配一个指定的正则表达式
  "id-match": 0,

  // 缩进使用 tab 还是空格
  indent: [
    2,
    2,
    {
      SwitchCase: 1,
    },
  ],

  // 强制变量在声明时中初始化
  // @reason 保证有初始值
  "init-declarations": [2, "always"],

  // 强制在 JSX 属性中一致地使用双引号
  "jsx-quotes": [2, "prefer-double"],

  // 强制在对象字面量的属性中键和值之间使用一致的间距
  "key-spacing": [
    2,
    {
      beforeColon: false,
      afterColon: true,
    },
  ],

  // 强制在关键字前后使用一致的空格
  "keyword-spacing": [
    2,
    {
      before: true,
      after: true,
    },
  ],

  // 不限制注释的问题，可以写在上方，也可以写法代码右侧
  // @reason 有些时候，直接在字段右侧给出注释更方便
  "line-comment-position": 0,

  // 注释前后是否要空一行
  "lines-around-comment": 0,

  // 强制块语句的最大可嵌套深度为 5 层
  "max-depth": [2, 5],

  // 不限制单行代码的长度
  "max-len": 0,

  // 不限制单个文件最大行数
  "max-lines": 0,

  // 强制回调函数最大嵌套深度为 4 层
  "max-nested-callbacks": [2, 4],

  // 强制函数定义中最多允许的参数数量为 8 个
  "max-params": [2, 8],

  // 强制每一行中所允许的最大语句数量为 3 个
  "max-statements-per-line": [
    2,
    {
      max: 3,
    },
  ],

  // 不限制函数块中的语句的最大数量
  "max-statements": 0,

  // 不要求三元操作数中间换行
  "multiline-ternary": 0,

  // 要求构造函数首字母大写
  "new-cap": [
    2,
    {
      newIsCap: true,
      capIsNew: true,
    },
  ],

  // 强制调用无参构造函数时有圆括号
  "new-parens": 2,

  // 不要求方法链中每个调用都有一个换行符
  "newline-per-chained-call": 0,

  // 禁用 alert、confirm 和 prompt
  "no-alert": 1,

  // 禁用 Array 构造函数，但可以使用 Array(num) 直接创建长度为 num 的数组
  "no-array-constructor": 2,

  // 禁止在循环中出现 await
  "no-await-in-loop": 2,

  // 禁用按位运算符
  "no-bitwise": 0,

  // 禁用 arguments.caller 或 arguments.callee
  "no-caller": 2,

  // 禁止在 case 或 default 子句中出现词法声明
  "no-case-declarations": 2,

  // 禁止变量声明与外层作用域的变量同名
  "no-shadow": 2,

  // 禁止将标识符定义为受限的名字
  "no-shadow-restricted-names": 2,

  // 禁止与 -0 进行比较
  "no-compare-neg-zero": 2,

  // 禁止条件表达式中出现赋值操作符
  "no-cond-assign": [2, "except-parens"],

  // 使用 console 进行提示
  "no-console": 1,

  // 禁止在条件中使用常量表达式
  "no-constant-condition": [
    2,
    {
      checkLoops: false,
    },
  ],

  // 可以用 continue
  "no-continue": 0,

  // 禁止在正则表达式中使用控制字符，如 Ctrl 键的 ASCII 表示，即/\x1f/
  "no-control-regex": 2,

  // 使用 debugger 进行提示
  "no-debugger": 1,

  // 禁止删除变量，但可以删除对象的属性
  "no-delete-var": 2,

  // 禁止使用看起来像除法的正则表达式，如 let a = /=foo/
  "no-div-regex": 0,

  // 禁止 function 定义中出现重名参数
  "no-dupe-args": 2,

  // 禁止对象字面量中出现重复的 key
  "no-dupe-keys": 2,

  // 禁止出现重复的 case 标签
  "no-duplicate-case": 2,

  // 允许在 else 前有 return
  "no-else-return": 0,

  // 禁止在正则表达式中使用空字符集
  "no-empty-character-class": 2,

  // 禁止出现空函数
  "no-empty-function": 2,

  // 禁止使用空解构模式：[] 或 {}
  "no-empty-pattern": 2,

  // 禁止出现空语句块，排除 catch
  "no-empty": [
    2,
    {
      allowEmptyCatch: true,
    },
  ],

  // 禁止在没有类型检查操作符的情况下与 null 进行比较
  "no-eq-null": 2,

  // 禁用 eval
  "no-eval": 2,

  // 禁止对 catch 子句的参数重新赋值
  "no-ex-assign": 2,

  // 禁止扩展原生类型
  "no-extend-native": 2,

  // 禁止不必要的 .bind() 调用
  "no-extra-bind": 2,

  // 禁止不必要的布尔转换
  "no-extra-boolean-cast": 2,

  // 禁用不必要的标签
  "no-extra-label": 2,

  // 禁止不必要的括号，仅针对函数体
  "no-extra-parens": [2, "functions"],

  // 禁止不必要的括号
  "no-extra-semi": 2,

  // 禁止 case 语句落空，包含注释的情况下允许
  "no-fallthrough": [
    2,
    {
      commentPattern: ".",
    },
  ],

  // 禁止数字字面量中使用前导和末尾小数点
  "no-floating-decimal": 2,

  // 禁止对 function 声明重新赋值
  "no-func-assign": 2,

  // 禁止对原生对象或只读的全局对象进行赋值
  "no-global-assign": 2,

  // 禁止使用短符号进行隐式类型转换，允许 + 转数值 '' + 转字符串和 !! 转布尔值
  "no-implicit-coercion": [
    2,
    {
      allow: ["+", "!!"],
    },
  ],

  // 禁止在全局范围内使用变量声明和 function 声明
  "no-implicit-globals": 2,

  // 禁止使用类似 eval() 的方法
  "no-implied-eval": 2,

  // 允许在代码后使用内联注释
  "no-inline-comments": 0,

  // 禁止在嵌套的块中出现变量声明或 function 声明
  "no-inner-declarations": [2, "both"],

  // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
  "no-invalid-regexp": 2,

  // 禁止 this 关键字出现在类和类对象之外
  // @reason this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
  "no-invalid-this": 0,

  // 禁止不规则的空白
  "no-irregular-whitespace": [
    2,
    {
      skipStrings: true, // 允许在字符串中使用
      skipComments: true, // 允许在注释中使用
      skipRegExps: true, // 允许在正则表达式中使用
      skipTemplates: true, // 允许在模板字符串中使用
    },
  ],

  // 禁用 __iterator__ 属性
  "no-iterator": 2,

  // 不允许标签与变量同名
  "no-label-var": 2,

  // 禁用标签语句
  "no-labels": [
    2,
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],

  // 禁用不必要的嵌套块
  "no-lone-blocks": 2,

  // 禁止 if 作为唯一的语句出现在 else 语句中
  // @reason 单独的 if 可以把逻辑表达的更清楚
  "no-lonely-if": 0,

  // 禁止在循环语句中出现包含不安全引用的函数声明
  "no-loop-func": 2,

  // 允许魔术数字
  "no-magic-numbers": 0,

  // 禁止混合使用不同的操作符，必须把不同的逻辑用圆括号括起来
  "no-mixed-operators": [
    2,
    {
      groups: [["&&", "||"]],
    },
  ],

  // 禁止空格和 tab 的混合缩进
  "no-mixed-spaces-and-tabs": 2,

  // 禁止连续赋值
  "no-multi-assign": 2,

  // 禁止使用多个空格
  "no-multi-spaces": 2,

  // 禁止使用多行字符串
  "no-multi-str": 2,

  // 出现多行空行的限制
  "no-multiple-empty-lines": [
    2,
    {
      max: 2, // 文件内最多连续 2 个
      maxEOF: 1, // 文件末尾最多连续 1 个
      maxBOF: 1, // 文件头最多连续 1 个
    },
  ],

  // 允许使用否定的表达式
  "no-negated-condition": 0,

  // 允许使用嵌套的三元表达式
  "no-nested-ternary": 0,

  // 禁止使用 new 以避免产生副作用
  "no-new": 2,

  // 禁止对 Function 对象使用 new 操作符
  "no-new-func": 0,

  // 禁用 Object 的构造函数
  "no-new-object": 2,

  // 禁止对 String，Number 和 Boolean 使用 new 操作符
  "no-new-wrappers": 2,

  // 禁止把全局对象（Math、JSON、Reflect等）作为函数调用
  "no-obj-calls": 2,

  // 禁用八进制字面量
  "no-octal": 2,

  // 禁止在字符串中使用八进制转义序列
  "no-octal-escape": 2,

  // 禁止对 function 的参数进行重新赋值
  "no-param-reassign": 2,

  // 允许使用一元操作符 ++ 和 --
  "no-plusplus": 0,

  // 禁用 __proto__ 属性
  "no-proto": 2,

  // 允许调用 Object.prototypes 的内置属性： hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
  // @reason 与 guard-for-in 规则冲突，且没有必要
  "no-prototype-builtins": 0,

  // 禁止多次声明同一变量
  "no-redeclare": 2,

  // 禁止正则表达式字面量中出现多个空格
  "no-regex-spaces": 2,

  // 禁用特定的全局变量
  // @reason 暂时没有
  "no-restricted-globals": 0,

  // 禁止使用对象的某些属性
  // @reason 暂时没有
  "no-restricted-properties": 0,

  // 禁用特定的语法
  // @reason 暂时没有
  "no-restricted-syntax": 0,

  // 禁止在 return 语句中使用赋值语句，除非是在圆括号中
  "no-return-assign": [2, "except-parens"],

  // 禁用不必要的 return await
  "no-return-await": 2,

  // 禁止使用 javascript
  // @reason 合理使用 html 标签。一些老项目需要单独配置。
  "no-script-url": 2,

  // 禁止自我赋值
  "no-self-assign": 2,

  // 禁止自身比较
  "no-self-compare": 2,

  // 禁止逗号操作符
  "no-sequences": 2,

  // 禁用稀疏数组
  "no-sparse-arrays": 2,

  // 禁用 tab
  "no-tabs": 2,

  // 禁止在常规字符串中出现模板字面量占位符语法
  "no-template-curly-in-string": 2,

  // 允许使用三元操作符
  "no-ternary": 0,

  // 禁止抛出异常字面量，必须 throw 一个 Error 对象
  "no-throw-literal": 2,

  // 禁用行尾空格
  "no-trailing-spaces": 2,

  // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
  "no-undef": 2,

  // 禁止将变量初始化为 undefined
  "no-undef-init": 2,

  // 禁止将 undefined 作为标识符
  "no-undefined": 2,

  // 允许标识符中有悬空下划线
  "no-underscore-dangle": 0,

  // 禁止出现令人困惑的多行表达式
  "no-unexpected-multiline": 2,

  // 禁用一成不变的循环条件
  "no-unmodified-loop-condition": 2,

  // 禁止可以在有更简单的可替代的表达式时使用三元操作符
  "no-unneeded-ternary": [
    2,
    {
      defaultAssignment: false,
    },
  ],

  // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
  "no-unreachable": 2,

  // 禁止在 finally 语句块中出现控制流语句：return、throw、break、continue
  "no-unsafe-finally": 2,

  // 禁止对关系运算符的左操作数使用否定操作符
  "no-unsafe-negation": 2,

  // 禁止出现未使用过的表达式
  "no-unused-expressions": [
    2,
    {
      allowShortCircuit: true, // 允许使用 a() || b 或 a && b()
      allowTernary: true, // 允许在表达式中使用三元运算符
      allowTaggedTemplates: true, // 允许标记模板字符串
    },
  ],

  // 禁用出现未使用过的标
  "no-unused-labels": 2,

  // 禁止出现未使用过的变量
  "no-unused-vars": [
    2,
    {
      vars: "all", // 变量定义必须被使用
      args: "none", // 对于函数形参不检测
      ignoreRestSiblings: true, // 忽略剩余子项 fn(...args)，{a, b, ...coords}
      caughtErrors: "none", // 忽略 catch 语句的参数使用
    },
  ],

  // 禁止在变量定义之前使用它们
  "no-use-before-define": [
    2,
    {
      functions: false, // 允许函数在定义之前被调用
      classes: false, // 允许类在定义之前被引用
    },
  ],

  // 禁止不必要的 .call() 和 .apply()
  "no-useless-call": 2,

  // 禁止在对象中使用不必要的计算属性
  "no-useless-computed-key": 2,

  // 禁止不必要的字符串字面量或模板字面量的连接
  "no-useless-concat": 2,

  // 禁止不必要的构造函数
  "no-useless-constructor": 2,

  // 禁用不必要的转义字符
  "no-useless-escape": 2,

  // 禁止多余的 return 语句
  "no-useless-return": 2,

  // 允许使用 void 操作符
  // @reason 已经禁止使用 undefined
  "no-void": 0,

  // 禁止在注释中使用特定的警告术语：TODO、FIXME
  "no-warning-comments": 1,

  // 禁止属性前有空白
  "no-whitespace-before-property": 2,

  // 禁用 with 语句
  "no-with": 2,

  // 强制单个语句的位置。禁止 if 语句在没有花括号的情况下换行
  "nonblock-statement-body-position": 2,

  // 强制大括号内换行符的一致性。对象字面量必须换行，其他超过 3 个必须换行
  "object-curly-newline": [
    2,
    {
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 4,
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 4,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 4,
      },
    },
  ],

  // 强制在大括号中使用一致的空格
  "object-curly-spacing": [
    2,
    "always",
    {
      objectsInObjects: false,
    },
  ],

  // 不限制将对象的属性放在不同的行上
  "object-property-newline": 0,

  // 强制函数中的变量要么一起声明要么分开声明
  "one-var": [
    2,
    {
      initialized: "never",
    },
  ],

  // 要求在变量声明周围换行
  "one-var-declaration-per-line": 2,

  // 要求在可能的情况下使用简化的赋值操作符
  "operator-assignment": 0,

  // 强制操作符使用一致的换行符
  "operator-linebreak": [
    2,
    "after",
    {
      overrides: {
        "?": "before",
        ":": "before",
      },
    },
  ],

  // 禁止块内填充
  "padded-blocks": [2, "never"],

  // 不限制在语句间填充空行
  "padding-line-between-statements": 0,

  // 要求使用 Error 对象作为 Promise 拒绝的原因
  "prefer-promise-reject-errors": 2,

  // 强制使用一致的反勾号、双引号或单引号
  quotes: [
    2,
    "single",
    {
      avoidEscape: true, // 允许包含单引号的字符串使用双引号
      allowTemplateLiterals: true, // 允许使用模板字符串
    },
  ],

  // 不要求对象字面量属性名称用引号括起来
  "quote-props": 0,

  // 不强制在 parseInt() 使用基数参数
  // @reason 第二个参数，在 ie9 以后默认都是 10 了。
  radix: 0,

  // 禁止使用不带 await 表达式的 async 函数
  "require-await": 2,

  // 必须使用 jsdoc 风格的注释
  "require-jsdoc": 0,

  // 禁止使用分号代替 ASI
  semi: [2, "never"],

  // 强制分号之前和之后使用一致的空格
  "semi-spacing": [
    2,
    {
      before: false,
      after: true,
    },
  ],

  // 强制分号的位置
  "semi-style": [2, "last"],

  // 不要求对象属性按序排列
  "sort-keys": 0,

  //  不要求同一个声明块中的变量按顺序排列
  "sort-vars": 0,

  // 强制在块之前使用一致的空格
  "space-before-blocks": [2, "always"],

  // 强制在 function 的左括号之前使用一致的空格
  "space-before-function-paren": [2, "never"],

  // 强制在圆括号内使用一致的空格
  "space-in-parens": [2, "never"],

  // 要求操作符周围有空格
  "space-infix-ops": 2,

  // 强制在一元操作符前后使用一致的空格
  "space-unary-ops": [
    2,
    {
      words: true,
      nonwords: false,
    },
  ],

  // 强制在注释中 // 或 /* 使用一致的空格
  "spaced-comment": [
    2,
    "always",
    {
      markers: [
        "global",
        "globals",
        "eslint",
        "eslint-disable",
        "*package",
        "!",
        ",",
      ],
    },
  ],

  // 禁止使用严格模式指令
  strict: [2, "never"],

  // 强制在 switch 的冒号左右有空格
  "switch-colon-spacing": [
    2,
    {
      after: true,
      before: false,
    },
  ],

  // 要求在模板标记和它们的字面量之间有空格
  "template-tag-spacing": [2, "always"],

  // 禁止 Unicode 字节顺序标记 (BOM)
  "unicode-bom": 2,

  // 要求使用 isNaN() 检查 NaN
  "use-isnan": 2,

  // 不要求注释符合 jsdoc 的规范
  "valid-jsdoc": 0,

  // 强制 typeof 表达式与有效的字符串进行比较。
  // typeof 判断条件只能是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol'
  "valid-typeof": 2,

  // 不要求所有的 var 声明出现在它们所在的作用域顶部
  "vars-on-top": 0,

  // 要求 IIFE 使用括号括起来
  "wrap-iife": [2, "any"],

  // 不要求正则表达式被括号括起来
  "wrap-regex": 0,

  // 强制在 yield* 表达式中 * 周围使用空格
  "yield-star-spacing": [2, "before"],

  // 禁止 “Yoda” 条件
  yoda: [2, "never"],

  // es6 相关 ************************************start***************
  // 要求箭头函数体使用大括号
  "arrow-body-style": [2, "as-needed"],

  // 要求箭头函数的参数使用圆括号
  "arrow-parens": [2, "as-needed"],

  // 要求箭头函数的箭头之前或之后有空格
  "arrow-spacing": [
    2,
    {
      before: true,
      after: true,
    },
  ],

  // 验证构造函数中 super() 的调用
  "constructor-super": 2,

  // 强制 generator 函数中 * 号周围使用一致的空格
  "generator-star-spacing": [
    2,
    {
      before: true,
      after: false,
    },
  ],

  // 禁止在可能与比较操作符相混淆的地方使用箭头函数，除非用圆括号括起来
  "no-confusing-arrow": [
    2,
    {
      allowParens: true,
    },
  ],

  // 禁止修改类声明的变量
  "no-class-assign": 2,

  // 禁止修改 const 声明的变量
  "no-const-assign": 2,

  // 禁止类成员中出现重复的名称
  "no-dupe-class-members": 2,

  // 禁止重复模块导入
  "no-duplicate-imports": 2,

  // 禁止 Symbol 操作符和 new 一起使用
  "no-new-symbol": 2,

  // 禁止使用指定的 import 加载的模块
  // @reason 暂时没有
  "no-restricted-imports": 0,

  // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
  "no-this-before-super": 2,

  // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
  "no-useless-rename": 2,

  // 要求使用 let 或 const 而不是 var
  "no-var": 2,

  // 不限制对象字面量中方法和属性使用简写语法
  "object-shorthand": 0,

  // 要求回调函数使用箭头函数
  "prefer-arrow-callback": 2,

  // 要求使用 const 声明那些声明后不再被修改的变量
  "prefer-const": 2,

  // 要求优先使用数组和对象解构
  "prefer-destructuring": 0,

  // 不限制 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
  "prefer-numeric-literals": 0,

  // 要求使用剩余参数而不是 arguments
  "prefer-rest-params": 2,

  // 不要求使用扩展运算符而非 .apply()
  "prefer-spread": 0,

  // 要求使用模板字面量而非字符串连接
  "prefer-template": 2,

  // 要求 generator 函数内有 yield
  "require-yield": 2,

  // 强制剩余和扩展运算符及其表达式之间不能有空格
  "rest-spread-spacing": [2, "never"],

  // 要求 symbol 描述
  "symbol-description": 2,

  // 禁止模板字符串中的嵌入表达式周围空格的使用
  "template-curly-spacing": [2, "never"],
  // *********************************************end*****************

  // 这些规则是关于Node.js 或 在浏览器中使用CommonJS 的：**********start********
  // 强制返回callback函数
  "callback-return": 0,

  // require() 出现在顶层模块作用域中
  // @reason 动态加载、条件加载时
  "global-require": 0,

  // 强制回调函数中有容错处理
  "handle-callback-err": [2, "^(err|error)$"],

  // 禁用 Buffer() 构造函数
  "no-buffer-constructor": 2,

  // 禁止混合常规变量声明和 require 调用
  "no-mixed-requires": 0,

  // 禁止调用 require 时使用 new 操作符
  "no-new-require": 2,

  // 禁止对 __dirname 和 __filename 进行字符串连接
  // @reason 应使用 path.join 或 path.resolve
  "no-path-concat": 2,

  // 允许使用 process.env
  "no-process-env": 0,

  // 允许使用 process.exit()
  "no-process-exit": 0,

  // 禁用通过 require 加载的指定模块
  // @reason 暂时没有
  "no-restricted-modules": 0,

  // 允许同步方法
  "no-sync": 0,

  // 引用排序
  "simple-import-sort/imports": "warn",
  "simple-import-sort/exports": "warn",

  // 禁止重复引入  但是与引入type不冲突
  "import/no-duplicates": "error",
  // *********************************************************end*********

  // 禁止修改入参
  "no-param-reassign": ["error", { props: true }],
};
