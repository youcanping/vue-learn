<template>
	<div>
		<h3>router-link</h3>
		<router-link to="/foo">go to /foo</router-link> <br>
		<router-link to="/bar">got to /bar</router-link> <br>
		<router-link to="/user/user_121212">/user/:id</router-link> <br>
		<router-link to="/user/user_121212?a=1&b=2&c=3">/user/:id query</router-link> <br>
		<router-link to="/user/user_121212?a=1&b=2&c=3#app_1/a/b">/user/:id query hash</router-link> <br>
		<router-link to="/user/user_121212/post/123">/user/:id/post/:post_id</router-link> <br>
		<router-link to="/user/foo">/user/foo 空路由</router-link> <br>
		<router-link to="/user/user_121212/profile">/user/profile 子路由</router-link> <br>
		<router-link to="/user/user_121212/post">/user/post 子路由</router-link> <br>
		<router-link :to="{name: 'user', params: {id: 'user_id'}}">{name: 'user', params: {id: 'user_id'}}</router-link> <br>
		<h3>编程式</h3>
		<button @click="$router.push('foo')">foo<pre>$router.push('foo')</pre></button>
		<button @click="$router.push({path:'/bar'})">bar <pre>$router.push({path:'/bar'})</pre></button>
		<button @click="$router.push({name: 'user', params: {id: 'user_id'}})">name 带参数 <pre>$router.push({name: 'user', params: {id: 'user_id}})</pre></button>
		<button @click="$router.push({name: 'user', params: {id: 'user_id'}})">name 带参数 <pre>$router.push({name: 'user', params: {id: 'user_id}})</pre></button>
		<button @click="$router.push({path: '/user/11111', params: {id: 'user_id'}})">path 带参数无效 <pre>$router.push({path: '/user', params: {id: 'user_id'}})</pre></button>
		<button @click="$router.push({path: 'user/id_1212', query:{a:1,b:2,c:3}})">path 带query对象<pre>$router.push({path: 'user/id_1212', query:{a:1,b:2,c:3}})</pre></button>
		<router-view class="view"></router-view>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueRouter from "vue-router";
	import Foo from './components/Foo.vue';
	import Bar from './components/Bar.vue';
	import User from  './components/User.vue';
	import UserProfile from './components/UserProfile.vue';
	import UserPost from  './components/UserPost.vue';
	Vue.use(VueRouter);
	const routes = [
		{
			path: '/foo',
			component: Foo
		},
		{
			path: '/bar',
			component: Bar
		},
		{
			path: '/user/:id',
			component: User,
			name: 'user',
			meta: {
				requiresAuth: true
			},
			children: [
				{
					path: 'profile',
					component: UserProfile,
					meta: {
						requiresAuth: true
					}
				},
				{
					path: 'post',
					component: UserPost,
					meta: {
						requiresAuth: false
					}
				}
			]
		},
		{
			path: '/user/:id/post/:post_id',
			component: User
		}
	];
	const router = new VueRouter({
		routes: routes
	});
	export default {
		router
	}
</script>
<style scoped>
	.view{
		border: 1px saddlebrown solid;
	}
</style>
