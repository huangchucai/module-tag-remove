<div align="center">
  <img width="150" height="150" alt="PostHTML" src="https://posthtml.github.io/posthtml/logo.svg">
  <h1>Plugin Starter Kit</h1>
  <p>A starter project for PostHTML plugins</p>

  [![Version][npm-version-shield]][npm]
  [![Build][github-ci-shield]][github-ci]
  [![License][license-shield]][license]
</div>

### About
在打包为离线包的情况下，使用`@vitejs/plugin-legacy`后，`script`标签包含了`module`属性和`nomodule`
属性，但是`type = module`的情况下，不能支持本地文件路径，所以直接打开会报错。

删除掉带有`type=module`的`script`标签，同时我们要去掉`script`的`nomodule`的属性，这样兼容传统浏览器的脚本在现代浏览器下也可以执行。
```sh
git clone https://github.com/posthtml/posthtml-plugin-starter.git
```

### Features

- Tests with [`ava`](https://github.com/avajs/ava)
- Linting with [`xo`](https://github.com/xojs/xo)
- Releases with [`np`](https://github.com/sindresorhus/np)
- Coverage with [`c8`](https://github.com/bcoe/c8)
- CI with GitHub Actions

#### Tests

The testing boilerplate includes a `process()` method which accepts 4 parameters:

- `t` the test object
- `name` the file name of the fixture/expected files, excluding extension
- `options` any options to pass to the plugin when testing
- `log` a boolean that turns on logging to console

For example, imagine we're writing a test that uses `/test/fixtures/skip-nodes.html`:

```js
test('It skips nodes defined in `skipNodes` option', t => {
  return process(t, 'skip-nodes', {skipNodes: ['a']}, true)
})
```

As you can see, the second parameter passed to the `process()` method is the fixture file name, without the `.html` extension.

##### Testing for Errors

To test errors thrown by your plugin, use the `error()` method:

```js
test('Syntax error', t => {
  return error('syntax-error', err => {
    t.is(err.message, 'Invalid or unexpected token')
  })
})
```

Just like before, the first parameter passed to `error()` is the fixture file name, without the extension.

## Introduction
删除`vite`打包后的部分`script`和移除`nomodule`属性


Input:

```html
<script type="module">xxxxx</script>
<script nomodule id="vite-legacy-polyfill" src="./assets/polyfills-legacy.1b8c3f41.js"></script>
```

Output:

```html
<script id="vite-legacy-polyfill" src="./assets/polyfills-legacy.1b8c3f41.js"></script>
```

## Install

```
$ npm i posthtml module-tag-remove
```

## Usage

Provide clear code samples showing how to use the plugin: 

```js
import posthtml from'posthtml'
import removeScript from 'module-tag-remove'

let result = posthtml().use(plugin()).process(html, { sync: true }).html
```
