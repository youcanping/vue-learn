# Vue实例
```js
	new Vue({
		
	});
```
* 所有Vue组件都是Vue实例，接受相同的属性（根实例特定属性除外）

## 数据和方法
* 后添加的数据属性，不支持数据绑定，如果未来需要用到某个属性，可以先定义好，设置一个初始默认值。
```js
	var data = {a:1};
	var vm = new Vue({
		el: "#app",
		data: data
	});
	data === vm.$data; // true;
	data.a = 2;
	vm.$data.a; // 2
```
## 生命周期
1. 实例创建 `beforeCreate`和`created`
1. 实例挂载 `beforeMount`和`mounted`
1. 实例更新 `beforeUpdate`和`updated`
1. 实例销毁 `beforeDestroy`和`destroyed`
