# 自定义指令
## 注册全局指令
```js
Vue.directive('focus', {
	inserted(el){
		el.focus();
	}
})
```

## 钩子函数
* `bind`：只调用一次，指令第一次绑定到元素上调用，可以初始化用
* `inserted`：元素插入时调用
* `update`：指令所在VNode更新时调用，不包括子VNode
* `componentUpdated`：指令所在VNode和子VNode都更新调用
* `unbind` ：指令和元素解除绑定调用。

## 钩子函数参数
* el
* binding
* vnode
* oldVnode
