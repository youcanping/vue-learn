<template>
	<div>
		<h1>Route props</h1>
		<ul>
			<li><router-link to="/">/</router-link></li>
			<li><router-link to="/hello/you">/hello/you</router-link></li>
			<li><router-link to="/static">/static</router-link></li>
			<li><router-link to="/dynamic/1">/dynamic/1</router-link></li>
			<li><router-link to="/attrs">/attrs</router-link></li>
		</ul>
		<router-view class="view" foo="123"></router-view>
	</div>
</template>
<!--路由组件参数示例-->
<script>
	import Vue from 'vue';
	import VueRouter from "vue-router";
	import Hello from './components/Hello.vue';
	Vue.use(VueRouter);
	function dynamicPropsFn (route) {
		const now = new Date()
		return {
			name: (now.getFullYear() + parseInt(route.params.years)) + '!'
		}
	}

	const router = new VueRouter({
		// mode: 'history',
		// base: __dirname,
		routes: [
			{ path: '/', component: Hello }, // No props, no nothing
			{ path: '/hello/:name', component: Hello, props: true }, // Pass route.params to props
			{ path: '/static', component: Hello, props: { name: 'world' }}, // static values
			{ path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // custom logic for mapping between route and props
			{ path: '/attrs', component: Hello, props: { name: 'attrs' }}
		]
	});
    export default {
        name: "app-2",
		router
    }
</script>

<style scoped>

</style>
