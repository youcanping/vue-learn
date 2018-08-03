# 路由
## 动态路由
### 使用`:`匹配参数
* `/user/:id` 匹配 `/user/user_1212` 的`id = user_1212`
* `/user/:id/post/:post_id` 匹配 `/user/user_1212/post/123` 则 `id = user_1212, post_id = 123`
### 参数获取
在模板中使用`$route`调用如下方法：
* `$route.params` 获取参数，json格式。
* `$route.query` 获取`url query`参数，json格式。
* `$route.hash` 获取`url`hash字符串。
## 编程路由
在指令中使用`$router`调用下方方法，如`$route.push()`
* `push`
* `replace`
* `go`
> 注意`$route`和`$router`的使用场景。
## 命名路由
```js
import User from './components/User.vue';
var router = new VueRouter({
	routes: [
		{
			path: '/user/:id',
			name: 'user',
			component: User
		}
	]
});
var vm = new Vue({
	router
});
```
在`router-link`中
```html
<router-link :to="{name:'user', params: {id: '1212'}}">to user</router-link>
```
在js中
```js
router.push({name:'user', params: {id: '1212'}})
```
## 命名视图
如果多个`<router-view></router-view>`是平级关系，则需要使用`name`特性来区分
```html
<router-view class="view"></router-view>
<router-view class="view" name="foo"></router-view>
<router-view class="view" name="bar"></router-view>
```
```js
var router = new VueRouter({
	routes:[
		{
			path: '/',
			components: {
				default: one,
				foo: Foo,
				bar: Bar
			}
		}
	]
})
```
## 路由组件参数
在路由组件中使用`props`进行参数传递


