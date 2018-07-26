# 自定义事件
## 命名规则
* 触发的事件名要和监听的事件名完全匹配才能被触发。
* 触发`camelCase`的事件名不能用`kebab-case`来监听
```js
 this.$emit("myEvent");
```
```html
	<base-button v-on:my-event="handler"></baseButton>
```
* 由于`html`是大小写不敏感的，事件名中包含大写字母都会解释成小写，会造成事件无法匹配触发的问题。
* 为了避免不必要的麻烦，事件名统一使用`kebab-case`规则命名。
## 自定义组件v-model
一个组件的`v-model`默认会使用prop`value`特性和`input`事件来实现。    
单选框复选框这样的表单类型`value`有另外用途，这种情况可以使用`model`属性来解决该问题
```html
<template>
	<label>
		{{label}}
		<input type="checkbox" 
				v-bind:checked="checked" 
				v-on:change="$emit('change', $event.target.checked)"
		>
	</label>
</template>
```
```javascript
Vue.component("BaseCheckbox", {
	inheritAttrs: false,
	model: {
		prop: "checked", //需要在props声明
		event: "change"
	},
	props: {
		checked: Boolean,
		label: null
	}
});
```
```html
<base-chckebox v-model="checked" v-on:change="onChange"></base-chckebox>
```

## 绑定原生事件
如何让组件像使用原生控件一样，使用原生事件。
> Vue提供了`$listeners`属性来绑定原生事件
```html
<template>
<label>
	{{label}} <input type="text" 
				v-bind="$attrs"
				v-bind:value="value"
				v-on="inputListeners"
	>
</label>
</template>
```
```javascript
Vue.component("BaseInput", {
	inheritAttrs: false,
	props: {
		value: null,
		label: String
	},
	computed: {
		inputListeners: function() {
		  	let self = this;
		  	return Object.assign({}, 
		  		self.$listeners,
		  		{
		  			input: function (e) {
						return vm.$emit('input', e.target.value);
					}
		  		}
		  	)
		}
	}
})
```


