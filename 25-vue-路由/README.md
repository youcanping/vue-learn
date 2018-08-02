# 过滤器
## 可以使用过滤器的地方
* `v-bind` 指令中
* `{{ }}` 模板中

## 局部注册过滤器
```html
	<input v-model="message" placeholder="请输入">
	<p>{{message | capitalize}}</p>
```
```js
var app = new Vue({
	el: "#app",
	data: {
		message: ""
	},
	filters: {
		/**
		*  大写首字母
		*/
		capitalize: function (value) {
			if(!value){
				return '';
			}
			return value.charAt(0).toUpperCase() + value.slice(1);
		}
	}
});
```
## 全局注册
```js
Vue.filter("capitalize", function (value) {
	if(!value){
		return '';
	}
	return value.charAt(0).toUpperCase() + value.slice(1);
});
```

## 串联
```html
<p> {{ message | filterA('arg1', arg2) | filterB }} </p>
```
* `filterA`的第一个参数是`message`的值。
* `filterA`的第二个参数是字符串`arg1`。
* `filterA`的第三个参数表达式`arg2`。
* `filterA` 的返回结果是`filterB`的参数。

