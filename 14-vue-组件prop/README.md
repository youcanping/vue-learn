# prop
## 命名规则
`HTML`特性的名是大小写不敏感的，浏览器会把所有大写特性解释成小写字符。
* 在`js`中使用`camelCase`驼峰名。
* 在`dom`中使用`kebab-case`短横线特性名。
```js
<!--  使用 camelCase-->
Vue.component("my-component",{
	props:["postTitle"]
});
```
```html
<!--  使用kebab-case-->
<my-component post-title="hello world"></my-component>
```
## prop类型
给prop声明数据类型，对不合法特性赋值，在开发环境会在控制台输出警告信息。
```js
Vue.component("my-componnet",{
	props: {
		text: String,
		index: Number,
		flag: Boolean,
		obj: Object,
		list: Array
	}
});
```

## 传递静态和动态prop
### 静态特性传值
```html
<blog-post title="hello world"></blog-post>
```
### 动态特性传值
```html
<blog-post v-bind:title="post.title"></blog-post>
```
### 传递任何数据类型
静态特性需要传入非字符串类型的值，需要用`v-bind`进行特性传值，否则无法识别特性的类型值。
```html
<!--  传入数字 -->
<blog-post v-bind:index="12"></blog-post>
<!--  传入布尔值 -->
<blog-post v-bind:flag="true"></blog-post>
<!--  传入对象 -->
<blog-post v-bind:obj="post"></blog-post>
<!--  传入数组 -->
<blog-post v-bind:list="["1","2"]"></blog-post>
```
## prop验证
```js
Vue.component("my-component", {
	props: {
		//匹配基础类型（`Null`匹配任意类型）
		propA: String,
		//匹配多种数据类型
		propB: [String, Number],
		// 必填的选项
		propC: {
			type: String,
			required: true
		},
		// 带有默认值的数字
		propD: {
			type: Number,
			default: 100
		},
		// 带有默认值的对象
		propE: {
			type: Object,
			// 对象和数字的默认值要通过一个函数返回
			default: function(){
				return {message: "hello"};
			}
		},
		// 自定义验证函数
		propF: {
			type: String,
			validator: function(value){
				return ["success", "warning", "danger"].indexOf(value) !== -1;
			}
		}
	}
});
```
## 非Prop的特性
在组件中添加非prop特性，会作用在该组件的根元素上。
## 替换/合并已有特性
* 在组件中添加和组件内根元素相同的特性，会进行属性替换。
* `:class`和`:style`不会进行特性替换，会进行特性合并
## 禁用特性继承
* 不希望组件在根元素继承特性，就需要设置`inheritAttrs:false`
* 配合实例的`$attrs`，手动决定特性赋予哪个元素
* `class`和`style`特性一直会继承到根元素上
```html
<template>
	<div>
		<button v-bind="$attrs"><slot></slot></button>
	</div>
</template>
```
```js
Vue.component("BaseButton",{
	inheritAttrs: false//禁用根实例继承特性
})
```





