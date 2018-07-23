# 列表渲染
## 遍历数组
```html
<template>
	<ul>
		<li v-for="(book, index) of books">
			{{ index }} - {{ book.type }} - {{ book.name }}
		</li>
	</ul>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		books: [
			{
				name: "JavaScript 高级程序设计",
				type: "JavaScript"
			},
			{
				name: "CSS 揭秘",
				type: "CSS"
			},
			{
				name: "HTML5 入门",
				type: "HTML"
			}
		]
	}
})
```
## 遍历对象
`v-for`遍历对象，没有固定顺序，使用`Object.keys()`来获取属性列表的，无法保证平台统一。
```html
<template>
<ul>
	<li v-for="(val, key, index) in user" :key="user">
			{{ key }} - {{val}} - {{index}}
	</li>
</ul>
</template>
```

## 数组更新检测
### 变异方法
以下数组的方法，会改变原数组的内容，同时会触发视图的更新。
* push 		-在原数组末尾追加一个元素
* pop 		-删除原数组末尾的元素。
* shift		-从原数组中删除第一个元素。
* unshift 	-将一个或多个元素添加到原数组的开头，并返回新数组的长度。
* splice	-通过在数组中删除现有元素或添加新元素，来改变数组的内容。
* sort		-给原数组排序
* reverse	-反转数组
### 替换数组
有些数组方法，不会改变原数组，返回新数组。
* concat	-用于连接2个数组，不会改变原数组，返回连接的新数组。
* filter	-过滤数组元素到新数组中，返回该新数组，不会改变原数组。
* slice		-用于拷贝原数组片段到一个新数组中，原数组不会内容不会改变，返回新数组。
以上方法不会改变原数组，而是返回新数组，可以使用数组替换的方式，触发视图更新。
``js
vm.items = vm.items.slice(2,4);
``
### 注意事项
由于`javascript`的限制，不能检测如下数组的变化。
* vm.items[i] = newVal 给数组赋值
* vm.length = 8; 改变数组长度
> 为了使`Vue`能够监听数组值得变化，需要用到`Vue.js`提供的赋值方法`vm.$set`和`Vue.set`：

```js
vm.$set(vm.items,indexOfItem, newValue);//实例方法
Vue.set(vm.items,indexOfItem, newValue);//Vue全局方法
vm.items.splice(indexOfItem, 1, newValue)//替换元素
```
> 改变数组长度
```js
vm.item.splice(length);
```
### 监听对象属性的改变
添加新属性和删除，无法触发视图更新。
```js
var vm = new Vue({
	el: "#app",
	data: {
		obj: {
			a: 1,
			b: 2
		}
	}
});
vm.obj.a = 3;//触发视图更新
vm.obj.c = 4;//无法触发视图更新
```
使用`Vue`提供的方法`set`来设置属性，触发视图更新。
```js
vm.$set(vm.obj, "d", 5); //触发视图更新
Vue.set(vm.obj, "d", 6); //全局方法
```
## `v-for`和`v-of`
两者同时使用时，`v-for`的优先级比`v-of`的优先级高。

> Vue.js 2.2.0版本中，在组件中使用`v-for`时`key`时必须的。





	
