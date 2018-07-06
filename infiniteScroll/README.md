# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 参数说明

```
parent-element （选填，默认父滚动对象为body，设置为false后滚动对象为parentNode）
infinite-function （必填，http请求函数）
infinite-loading （必填， 是否正在请求的状态，请求中为true）
slot="bottom" （选填，有默认加载动画）
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
