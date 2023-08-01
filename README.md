# eslint

ESLint 规则配置集。支持原生 js、Vue、React、TypeScript。


### js

```
yarn add eslint @babel/core @babel/eslint-parser -D
yarn add @jianhunxia/eslint -D
```

### vue

```
yarn add\
  eslint\
  @babel/core @babel/eslint-parser\
  eslint-plugin-vue\
  vue-eslint-parser\
  -D
yarn add @jianhunxia/eslint -D
```

### react

```
yarn add\
  eslint\
  @babel/core @babel/eslint-parser\
  eslint-plugin-react\
  -D
yarn add @jianhunxia/eslint -D
```

### typescript

```
yarn add\
  eslint\
  @babel/core @babel/eslint-parser\
  @typescript-eslint/parser\
  @typescript-eslint/eslint-plugin\
  -D
yarn add @jianhunxia/eslint -D
```

## Usage

通过 .eslintrc 相关文件里的 `extends` 字段引入。

### js

```
{
  extends: ["@jianhunxia/eslint"]
}
```

### vue

```
{
  extends: ["@jianhunxia/eslint/vue"]
}
```

### react

```
{
  extends: ["@jianhunxia/eslint/react"]
}
```

### typescript

```
{
  extends: ["@jianhunxia/eslint/typescript"]
}
```

## Integrating with Prettier

```shell
// 1. 安装 Prettier
yarn add prettier --dev --exact
yarn add eslint-plugin-prettier eslint-config-prettier --dev

// 2. 配置 .eslintrc 相关文件
{
  extends: [
    "@jianhunxia/eslint",
    "plugin:prettier/recommended"
  ]
}

// 3. 配置 .prettierrc 相关文件
// semi、singleQuote、trailingComma、endOfLine 这四项规则保持和 eslint 一致
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "arrowParens": "avoid",
  "endOfLine": "auto"
}

// 4. 例子：react + typescript 项目

// 安装
yarn add\
  eslint\
  @babel/core @babel/eslint-parser\
  eslint-plugin-react\
  @typescript-eslint/parser\
  @typescript-eslint/eslint-plugin\
  eslint-plugin-prettier\
  eslint-config-prettier\
  -D
yarn add @jianhunxia/eslint -D
yarn add prettier --dev --exact

// .eslintrc
{
  "extends": [
    "@jianhunxia/eslint/react",
    "@jianhunxia/eslint/typescript",
    "plugin:prettier/recommended"
  ]
}
```

## 推荐插件

```
eslint-plugin-import  // import/no-duplicates   禁止重复引入  但是与引入type不冲突

eslint-plugin-simple-import-sort  // simple-import-sort/imports  import排序

```

## Refers

https://eslint.org/

https://github.com/ElemeFE/eslint-config-elemefe

https://github.com/AlloyTeam/eslint-config-alloy

https://github.com/vuejs/eslint-plugin-vue

https://github.com/yannickcr/eslint-plugin-react

https://github.com/typescript-eslint/typescript-eslint

https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

## Environment

> Node.js >= 8, TypeScript >=3.3.1
