# Vue事件处理
## 事件绑定
* 使用`v-on`监听事件处理，并处理一些js代码
```html
<template>
	<button v-on:click="count += 1">加1</button>
</template>
```
* 给事件绑定方法
```html
<template>
	<button v-on:click="greet">点击我</button>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	methods: {
		greet: function() {
		  	alert("大家好！");
		}
	}
});
```
* 调用方法传递参数
```html
<template>
	<button v-on:click="say('大家好')">打招呼</button>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	methods: {
		say: function(message) {
		  	alert("hello "+ message);
		}
	}
});
```
* 访问原生事件对象，在模板中使用`$event`作为原生对象的引用。
```html
<template>
	<button v-on:click="say('大家好', $event)">打招呼</button>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	methods: {
		say: function(message, event) {
			if(event){
				event.preventDefault();//阻止默认方法
			}
		  	alert("hello "+ message);
		}
	}
});
```
## 事件修饰符
* `.stop` 阻止事件冒泡。
* `.prevent` 阻止事件默认行为，如表单重载页面行为。
* `.capture` 使用事件捕获模式。
* `.once` 事件只触发一次。
* `.passive` 使滚动行为立即触发，可以提升移动端的滚动性能。
