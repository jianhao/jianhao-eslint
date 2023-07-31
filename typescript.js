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
  parser: "@typescript-eslint/parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    ...rules,

    "no-undef": 0, // https://github.com/typescript-eslint/typescript-eslint/blob/e26e43ffba96f6d46198b22f1c8dd5c814db2652/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors

    // 重载的函数必须写在一起
    "@typescript-eslint/adjacent-overload-signatures": 2,

    // 限制数组类型允许灵活使用 Array<T> 或 T[]
    "@typescript-eslint/array-type": 0,

    // 不强制限制对没有 then 方法的对象使用 await
    "@typescript-eslint/await-thenable": 0,

    //  禁止使用 @ts-<directive> 之类的注释
    "@typescript-eslint/ban-ts-comment": 2,

    //  不限制使用 tslint:<rule-flag> 之类的注释
    "@typescript-eslint/ban-tslint-comment": 0,

    // 不强制禁用特定的类型
    "@typescript-eslint/ban-types": 0,

    // 不强制在逗号前后保持一致的间距
    "@typescript-eslint/comma-spacing": 0,

    // 不限制 class 声明时字面量属性的风格
    "@typescript-eslint/class-literal-property-style": 0,

    // 暂不强制执行一致的类型断言
    "@typescript-eslint/consistent-type-assertions": 0,

    // 类型定义一致统一在 interface
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],

    // 不强制默认参数写在最后
    "@typescript-eslint/default-param-last": 0,

    // 不强制使用 . 运算符访问属性代替方括号访问属性
    "@typescript-eslint/dot-notation": 0,

    // 函数返回值必须与声明的类型一致（仅做编译阶段检查）
    "@typescript-eslint/explicit-function-return-type": 0,

    // 不强制设置类的成员的可访问性
    "@typescript-eslint/explicit-member-accessibility": 0,

    // 不强制导出函数和类的公共类方法上有显式的返回值和参数类型
    "@typescript-eslint/explicit-module-boundary-types": 0,

    // 函数名和执行它的括号之间禁止有空格
    "@typescript-eslint/func-call-spacing": [2, "never"],

    // 缩进使用 tab 还是空格
    // @reason: 使用 prettier 的规则
    "@typescript-eslint/indent": 0,

    // 强制变量在声明时中初始化
    // @reason 保证有初始值
    "@typescript-eslint/init-declarations": [2, "always"],

    // 不强制 class 成员间必须有空行
    "@typescript-eslint/lines-between-class-members": 0,

    // 接口和类型别名的成员之间无须使用分号分隔
    "@typescript-eslint/member-delimiter-style": 0,

    // 指定类成员的排序规则
    "@typescript-eslint/member-ordering": [
      2,
      {
        default: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "static-field",
          "public-static-method",
          "protected-static-method",
          "private-static-method",
          "static-method",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "public-field",
          "protected-field",
          "private-field",
          "instance-field",
          "field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
          "public-method",
          "protected-method",
          "private-method",
          "instance-method",
          "method",
        ],
      },
    ],

    //  不限制接口中方法属性的声明格式
    "@typescript-eslint/method-signature-style": 0,

    //  限制命名规则
    "@typescript-eslint/naming-convention": [
      2,
      //  约束泛型名称
      {
        selector: "typeParameter",
        format: ["PascalCase"],
      },
      //  类名必须是大驼峰式
      {
        selector: "class",
        format: ["PascalCase"],
      },
      //  接口名必须是大驼峰式
      {
        selector: "interface",
        format: ["PascalCase"],
      },
    ],

    // 禁止使用 Array 构造函数
    "@typescript-eslint/no-array-constructor": 2,

    // 不强制隐式转换为字符串时为该类型声明 toString 方法
    "@typescript-eslint/no-base-to-string": 0,

    // 允许使用类似 a! == b 的具有迷惑性的非 null 断言
    "@typescript-eslint/no-confusing-non-null-assertion": 0,

    // 禁止类成员中重复的属性
    "@typescript-eslint/no-dupe-class-members": 2,

    // 禁止重复模块导入，允许 import type
    "no-duplicate-imports": 0,
    "@typescript-eslint/no-duplicate-imports": 2,

    // 允许将删除运算符与计算出的键表达式一起使用
    "@typescript-eslint/no-dynamic-delete": 0,

    // 禁止出现空函数
    "@typescript-eslint/no-empty-function": 2,

    // 禁止定义空的接口
    "@typescript-eslint/no-empty-interface": 2,

    // 允许使用 any
    "@typescript-eslint/no-explicit-any": 0,

    // 禁止没必要的非 null 断言
    "@typescript-eslint/no-extra-non-null-assertion": 2,

    // 禁止函数表达式中出现多余的括号
    "@typescript-eslint/no-extra-parens": [2, "functions"],

    // 禁止不必要的分号
    "@typescript-eslint/no-extra-semi": 2,

    // 允许定义没必要的类，比如只有静态方法的类
    "@typescript-eslint/no-extraneous-class": 0,

    // 类Promise值不做任何限制处理
    "@typescript-eslint/no-floating-promises": 0,

    // 禁止对 array 使用 for in 循环
    "@typescript-eslint/no-for-in-array": 2,

    // 允许使用具有 eval 作用的表达式或函数
    "@typescript-eslint/no-implied-eval": 0,

    // 禁止给一个初始化时直接赋值为 number, string 的变量显式的指定类型
    "@typescript-eslint/no-inferrable-types": 2,

    // 不限制对 void 的使用
    "@typescript-eslint/no-invalid-void-type": 0,

    // 允许使用丢失精度的数值字面量
    "@typescript-eslint/no-loss-of-precision": 0,

    // 允许使用 magic numbers
    "@typescript-eslint/no-magic-numbers": 0,

    // 允许在接口中定义 constructor，或在类中定义 new
    "@typescript-eslint/no-misused-new": 0,

    // 允许使用promises不用await和then来处理
    "@typescript-eslint/no-misused-promises": 0,

    // 禁止使用 namespace 来定义命名空间 允许使用 declare namespace ... {} 来定义外部命名空间
    "@typescript-eslint/no-namespace": [
      2,
      {
        allowDeclarations: true,
        allowDefinitionFiles: true,
      },
    ],

    // 允许在可选链表达式之后使用非 null 断言
    "@typescript-eslint/no-non-null-asserted-optional-chain": 0,

    // 允许使用 non-null 断言（感叹号）
    "@typescript-eslint/no-non-null-assertion": 0,

    // 禁止给类的构造函数的参数添加修饰符
    "@typescript-eslint/no-parameter-properties": 2,

    // 允许使用 require(有时需要动态引入，还是需要用require)
    "@typescript-eslint/no-require-imports": 0,

    // 禁止将 this 赋值给其他变量，除非是解构赋值
    "@typescript-eslint/no-this-alias": [
      2,
      {
        allowDestructuring: true,
      },
    ],

    // 禁止声明同名变量
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": 2,

    //  允许将文字作为异常抛出
    "@typescript-eslint/no-throw-literal": 0,

    // 允许使用类型别名
    "@typescript-eslint/no-type-alias": 0,

    // 允许布尔类型的变量与布尔类型常量作比较
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": 0,

    // 禁止出现恒为真或恒为假的条件判断
    "@typescript-eslint/no-unnecessary-condition": 0,

    // 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
    "@typescript-eslint/no-unnecessary-qualifier": 0,

    // 不强制禁止无用的类型参数（编译阶段会做检查）
    "@typescript-eslint/no-unnecessary-type-arguments": 0,

    // 不强制禁止无用的类型断言（编译阶段会做检查）
    "@typescript-eslint/no-unnecessary-type-assertion": 0,

    // 允许给变量或属性声明为 any 类型
    "@typescript-eslint/no-unsafe-assignment": 0,

    // 允许调用类型为 any 的变量的方法
    "@typescript-eslint/no-unsafe-call": 0,

    // 允许成员访问 any 类型的变量
    "@typescript-eslint/no-unsafe-member-access": 0,

    // 允许函数返回 any 类型的值
    "@typescript-eslint/no-unsafe-return": 0,

    // 禁止出现未使用的变量
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        args: "none",
      },
    ],

    // 不强制禁止在定义变量之前就使用它（编译阶段会做检查）
    "no-use-before-define": 0, // 先禁用 eslint 中相关的基础 https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
    "@typescript-eslint/no-use-before-define": 0,

    // 禁止出现没必要的 constructor
    "@typescript-eslint/no-useless-constructor": 2,

    // 禁止使用 require 来引入模块 特殊情况使用单行注释允许 require 引入
    "@typescript-eslint/no-var-requires": 2,

    // 在类型与值一样时必须转为常量
    "@typescript-eslint/prefer-as-const": 2,

    // 不强制初始化每个枚举成员值
    "@typescript-eslint/prefer-enum-initializers": 0,

    // 使用 for 循环遍历数组时，如果 index 仅用于获取成员，则必须使用 for of 循环替代 for 循环
    "@typescript-eslint/prefer-for-of": 2,

    // 可以简写为函数类型的接口或字面类似，必须简写
    "@typescript-eslint/prefer-function-type": 2,

    // 允许使用 indexOf
    "@typescript-eslint/prefer-includes": 0,

    // 不强制所有枚举成员都是字面量
    "@typescript-eslint/prefer-literal-enum-member": 0,

    // 禁止使用 module 来定义命名空间
    "@typescript-eslint/prefer-namespace-keyword": 2,

    // 允许使用双问号运算符
    "@typescript-eslint/prefer-nullish-coalescing": 0,

    // 允许使用可选链语法
    "@typescript-eslint/prefer-optional-chain": 0,

    // 未修改的私有成员不强制定义为readonly
    "@typescript-eslint/prefer-readonly": 0,

    // 不强制函数参数为只读属性
    "@typescript-eslint/prefer-readonly-parameter-types": 0,

    // 不强制对 Array.reduce 方法参数类型的转换
    "@typescript-eslint/prefer-reduce-type-parameter": 0,

    // 允许使用 RegExp#exec 和 String#match
    "@typescript-eslint/prefer-regexp-exec": 0,

    // 使用 String#startsWith 而不是其他方式
    "@typescript-eslint/prefer-string-starts-ends-with": 0,

    // 不强制 @ts-expect-error 写在 @ts-ignore 前面（@ts-<directive> 注释已禁用）
    "@typescript-eslint/prefer-ts-expect-error": 0,

    // async 函数的返回值不强制必须是 Promise
    "@typescript-eslint/promise-function-async": 0,

    // 使用 sort 时必须 允许使用默认比较方法
    "@typescript-eslint/require-array-sort-compare": 0,

    // async 不强制 配套 await
    "@typescript-eslint/require-await": 0,

    // 使用加号时，两者不强制同类型相加
    "@typescript-eslint/restrict-plus-operands": 0,

    // 不强制字符串模板中变量为 string 类型
    "@typescript-eslint/restrict-template-expressions": 0,

    // 结尾必须有分号
    "@typescript-eslint/semi": [2, "never"],

    // 布尔表达式的值 不强制结果为布尔值
    "@typescript-eslint/strict-boolean-expressions": 0,

    // 不强制对 switch 语句中所有情况作检查
    "@typescript-eslint/switch-exhaustiveness-check": 0,

    // 三重斜线引用  暂不强制使用
    "@typescript-eslint/triple-slash-reference": 0,

    // 类型定义的冒号前面必须没有空格，后面必须有一个空格
    "@typescript-eslint/type-annotation-spacing": 2,

    // 不强制引入类型注释
    typedef: 0,

    // 方法调用时需要绑定到正确的 this 上
    "@typescript-eslint/unbound-method": 0,

    // 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
    "@typescript-eslint/unified-signatures": 2,

    // 引入类型时自动加上type
    "@typescript-eslint/consistent-type-imports": "error",

    // 防止函数重载报错
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.md
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],
  },
};
