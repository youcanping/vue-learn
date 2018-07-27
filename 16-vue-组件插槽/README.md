# Vue组件插槽
## 匿名插槽
匿名插件接收组件内的任何内容。
```html
<template>
	<a target="_blank" v-bind:href="url">
		<slot></slot>
	</a>
</template>
```
```js
Vue.component("navigation-link",{
	props: ["url"]
});
```
```html
<navigation-link url="http://www.jd.com">京东商城</navigation-link>
```
## 具名插槽
具名插槽用于约定插槽内容存放的位置，在`slot`元素中的`name`特性来区分
```html
<template>
<div>
	<header>
		<slot name="header"></slot>
	</header>
	<main>
		<slot></slot>
	</main>
	<footer>
		<slot name="footer"></slot>
	</footer>
</div>
</template>
```
```html
<page-layout>
	<!-- 头部标题的内容 -->
	<div slot="header">标题</div>
	<!--除了具名插槽外的都系都显示在匿名插槽内-->
	<div></div>
	<div slot="footer">底部</div>
</page-layout>
```
## 作用域插槽
通过插槽把组件内部的值向外传递，并且外部可以覆盖内部插件的默认内容
```html
<template>
	<ul>
		<li v-for="todo of todos" v-bind:key="todo.id">
			<slot v-bind:todo="todo">
				{{todo.text}}
			</slot>
		</li>	
	</ul>
</template>
```
```html
<template>
	<todo-list v-bind:todos="todos">
		<template slot-scope="slotProps">
			<span v-if="slotProps.todo.isComplete">✅</span>
			{{ slotProps.todo.text }}
		</template>	
	</todo-list>
</template>
```
