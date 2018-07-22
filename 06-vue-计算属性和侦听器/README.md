# 计算属性
在我们使用模板语法时会嵌套一些表达式，但是使用过多的表达式会使模板看起来很费劲，幸好`Vue.js`有计算属性可以用。
## 计算属性缓存
计算属性是基于它的依赖进行缓存的，也就是说它的依赖未发送变化，多次调用计算属性，返回的是上次计算的值。
```js
new Vue({
	el:"#app",
	data: {
		message: "Hello Vue.js"
	},
	computed: {
		reverseMessage(){
			// this.message 就是该计算属性的依赖。
			// 只有 this.message 的值发生变化，计算属性才会重新计算值。
			return this.message.split("").reverse().join("");
		},
		now(){
			// 该计算属性无依赖，每次调用都是返回上次计算的值。
			return Date.now();
		}
	}
});
```
## 计算属性`set`和`get`
可以给计算属性设置`set`和`get`方法，用于做更细粒度的属性控制。
```js
var vm = new Vue({
	el: "#app",
	data: {
		name: "Mr.you"
	},
	computed: {
		name: {
			set: function(val) {
			  	//
			},
			get: function() {
			  return this.name.toUpperCase();
			}
		}
	}
})
```
## 计算属性和方法
计算属性能实现的用方法也能实现，但是对于计算开销比较大的工作用计算属性的缓存机制，能节省性能开销。
# 侦听器
* 在`Vue.js`中我们可以使用`watch`侦听`data`中属性的变化。
* 不要在`watch`中使用箭头函数，箭头函数会绑定父级作用域的上下文，不会像期望的那样绑定`Vue`实例，`this`的引用不会达到预期的效果。

```js
var vm = new Vue({
	el: "#app",
	data: {
		firstName: "For",
		lastName: "Bar",
		fullName: "For Bar"
	},
	watch: {
		firstName: function(newVal, oldVal) {
		  	this.fullName = newVal + " "+ this.lastName;
		},
		lastName: function(newVal, oldVal) {
		  	this.fullName = this.firstName + " "+ newVal;
		}
	}
});
```

