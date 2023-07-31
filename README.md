# eslint-config-moresec

ESLint 规则配置集。支持原生 js、Vue、React、TypeScript。

## Install

> 只支持在内网环境下安装。如何设置 npm 源为内网环境，参考：http://192.168.180.66:8090/pages/viewpage.action?pageId=30871923

### js

```
yarn add eslint @babel/core @babel/eslint-parser -D
yarn add @moresec/eslint-config-moresec -D
```

### vue

```
yarn add\
  eslint\
  @babel/core @babel/eslint-parser\
  eslint-plugin-vue\
  vue-eslint-parser\
  -D
yarn add @moresec/eslint-config-moresec -D
```

### react

```
yarn add\
  eslint\
  @babel/core @babel/eslint-parser\
  eslint-plugin-react\
  -D
yarn add @moresec/eslint-config-moresec -D
```

### typescript

```
yarn add\
  eslint\
  @babel/core @babel/eslint-parser\
  @typescript-eslint/parser\
  @typescript-eslint/eslint-plugin\
  -D
yarn add @moresec/eslint-config-moresec -D
```

## Usage

通过 .eslintrc 相关文件里的 `extends` 字段引入。

### js

```
{
  extends: ["@moresec/moresec"]
}
```

### vue

```
{
  extends: ["@moresec/moresec/vue"]
}
```

### react

```
{
  extends: ["@moresec/moresec/react"]
}
```

### typescript

```
{
  extends: ["@moresec/moresec/typescript"]
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
    "@moresec/moresec",
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
yarn add @moresec/eslint-config-moresec -D
yarn add prettier --dev --exact

// .eslintrc
{
  "extends": [
    "@moresec/moresec/react",
    "@moresec/moresec/typescript",
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
