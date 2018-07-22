# Class和Style绑定
`v-bind`对绑定`class`和`style`做了增强，属性的值允许是对象和数组。
## class绑定
### 对象语法
* 使用对象语法动态切换`class`
```html
<template>
	<!--active就是class名称，isActive就是切换的flag标识-->
	<p v-bind:class="{active: isActive}">
		Hello Vue.js
	</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		isActive: true
	}
});
```
* 绑定data属性中的对象，来进行切换`class`
```html
<template>
	<p v-bind:class="classObject">
		Hello Vue.js
	</p>
</template>
```
```js
	var vm = new Vue({
		el: "#app",
		data: {
			classObject: {
				active: true // active就是类名，true会应用该类名，false则不应用该类名
			}
		}
	});
```
* 绑定`class`结合计算属性`computed`属性一起使用
```html
<template>
	<p v-bind:class="classObject">
		Hello Vue.js
	</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		isActive: true,
		error: null
	},
	computed: {
	  	classObject: function() {
	  	  	return {
	  	  		active: this.isActive && !this.hasError,
	  	  		'text-danger': this.error && this.error.code === 'fail'  
	  	  	}
	  	}
	}
});
```

### 数组语法
* 使用数组语法来应用`class`
```html
<template>
<p	v-bind:class="[activeClass, errorClass]">
	Hello Vue.js
</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		activeClass: "active", //active 应用的class
		errorClass: "text-danger"
	}
});
```
* 在数组中使用表达式
```html
<template>
<p v-bind:class="[isActive?'active':'', errorClass]">
	Hello Vue.js
</p>
</template>
```
* 在数组中使用对象
```html
<template>
<p v-bind:class="[activeObject, errorClass]">
	Hello Vue.js
</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		activeObject: {
			active: true
		},
		errorClass: "text-danger"
	}
});
```
## 绑定style
内联样式使用对象语法进行赋值，属性可以使用驼峰命名法，也可以使用短横杆分隔符。
```html
<template>
<p v-bind:style="{background: '#009988', fontSize: '24px', 'font-weight': 500}">
	Hello World
</p>
</template>
```
### 使用对象属性绑定样式
```html
<template>
<p v-bind:style="styleObject">
	Hello World
</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		styleObject: {
			fontSize: "24px",
			background: "#887766"
		}
	}
});
```
### 使用数组绑定style
数组中后面的的样式权限会比前面的高。
```html
<template>
<p v-bind:style="[baseStyles, overrideStyles]">
	Hello Vue.js
</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		baseStyles: {
			color: "#333333"
		},
		overrideStyles: {
			color: "#666666"
		}
	}
});
```


