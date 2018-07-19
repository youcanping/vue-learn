# 模板语法
## 插值
### 使用双大括号语法，进行文本插值
```
	{{ message }}
```
### 在`HTML`特性上插值需要用`v-bind`
```html
<button v-show="show" v-bind:disabed="buttonDisable"></button>
```
	* 这里buttonDisabled的值为`null`、`undefined`和`false`不会作用在元素上，注意数字`0`和`1`效果一样都能禁用`button`。        
	* `v-show`指令中数字`0`，会隐藏`button`。
### 在模板语法里使用表达式
* 只能是表达式，不能是控制语句
```html
	// 表达式
	{{ isOk? "yes": "no" }}
	// 控制语句 请使用三元表达式
	{{ if(isOk){return "yes"}else{return "no"} }}
```
* 表达式中可用到的全局对象，如原生内置对象`Date`，`Math`，`Regex`等，不能访问用户自定义的全局变量。
### 指令
* `v-bind`缩写`:`
```html
<button v-bind:disabled="buttonDisabled">按钮</button>
<button :disbaled="buttonDisabled">按钮</button>
```
*  `v-on`缩写`@`
```html
<button v-on:click="buttonHandler">按钮</button>
<button @click="buttonHandler">按钮</button>
```



