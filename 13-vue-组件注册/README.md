# 组件注册
## 组件命名
> 组件名使用`短横线连接符`命名规则，因为`HTML`标签名是不区分大小写的，如果组件是使用在字符串模板里可以绕开该限制。
* 使用kebab-case(短横线连接符命名)方式，只能使用短横线连接的方式调用
```js
Vue.component("my-component",{})
```
```html
<!--  组件使用 -->
<my-component></my-conponent>
```
* 使用PascalCase(大驼峰命名法)，首字母都大写，组件可以使用短横线连接符和驼峰命名的方式2种方式调用。
```js
Vue.component("MyComponent",{});
```
```html
<!--  短横线调用方式 -->
<my-component></my-component>
<!--  驼峰命名的调用方式 -->
<MyComponent></MyComponnet>
```
## 全局注册
全局注册的组件，可以在任何`Vue`实例中使用。
```js
Vue.component("my-component", {});
```
## 局部注册
局部注册的组件，只能在该实例（组件）内部使用
## 模块化局部注册
模块化批量局部注册组件
```js
// components/componentMain.js
import ComponentA from "./ComponentA";
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

export default {
	components:{
		ComponentA,
		ComponentB,
		ComponentC
	}
}
```
```js
<template>
	<component-a></component-a>
    <ComponentB></ComponentB>
    <component-c></component-c>
</template>
<script>
	import components from "./components/ComponentMain"
     export default components
</srcipt>
```
## 模块化全局注册
