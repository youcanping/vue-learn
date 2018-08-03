# 混入
## 混入基础
混入可以用于提取组件的公共属性和方法。
```js
const myMixin = {
	created(){
		this.hello();
	},
	methods:{
		hello(){
			console.log("hello mixin");
		}
	}
}
const Component = Vue.extend({
	mixins: [myMixin]
})
export default new Component();
```
## 选项合并
* 数据对象在内部会进行合并，同名属性以组件组件的优先。
* 同名钩子将混合为一个数组，都将被调用，混入对象的钩子优先于组件的钩子调用。
* 值为对象的选项`methods`,`components`,`directives`将混合为一个对象，属性相同的组件内的优先。

## 全局混入
全局混入会影响所有组件包括三方组件，一般只用于自定义选项
```js
Vue.mixin({
	created(){
		var myOption = this.$options.myOption;
		if(myOption){
			console.log(myOption);
		}
	}
});
```
