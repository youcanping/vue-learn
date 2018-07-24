# 表单输入绑定
* `v-model`会忽略所有表单元素中`value`、`checked`、`checked`特性的值，而是使用`data`绑定的值作为初始值。
* `v-model`会忽略中文输入法联想汉子时的状态，而总是等待输入完成更新视图。
## 文本
```html
<template>
<p>
	<label for="input-text">文本输入：</label>
	<input id="input-text" type="text" v-model="text" placeholder="请输入">
</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		text:""//文本
	}
});
```
## 复选框
> 单个复选框用布尔值

```html
<template>
<p>
	<label for="input-checked">复选框</label>
	<input id="input-checked" type="checkbox" v-model="checked">
</p>
</template>
```
```js
var vm = new Vue({
	data: {
		checked: false
	}
});
```

## 多个复选框
> 多个复选框数据绑定用数组

```html
<template>
<p>
	<label>游泳：</label>
	<input type="checkbox" id="check_1" value="游泳">
</p>
<p>
	<label>唱歌：</label>
	<input type="checkbox" id="check_2" value="唱歌">
</p>
<p>
	<label>爬山：</label>
	<input type="checkbox" id="check_3" value="爬山">
</p>
</template>
```
```js
var vm = new Vue({
	data:{
		el:"#app",
		interests: ["游泳"]//数组中的值能匹配上则，默认选择该值
	}
});
```

## 单选
> 单选按钮绑定字符串

```html
<template>
<p>
	<label>男：</label>
	<input type="radio" v-model="sex"  name="sex" value="男">
</p>
<p>
	<label>女：</label>
	<input type="radio" v-model="sex" name="sex" value="女">
</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		sex: ""//单选值
	}
});
```

## 选择下拉框
> * 选择下拉框，最好是第一个为空选项并禁用
> * 单选下拉框，绑定字符串
> * 多选下拉框，绑定一个数组

```html
<template>
<p>
	<select v-model="country">
		<option disabled>--请选择--</option>
		<option>中国</option>
		<option>日本</option>
		<option>韩国</option>
	</select>
</p>
</template>
```
```js
var vm = new Vue({
	el: "#app",
	data: {
		country: ""
	}
});
```

## 修饰符
* `v-model.lazy` 输入框`change`事件触发视图更新
* `v-model.number` 输入框为数字
* `v-model.trim` 清除输入框的首尾空白字符





