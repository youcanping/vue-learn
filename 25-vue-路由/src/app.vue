<template>
	<div>
		<router-link to="/foo">go to /foo</router-link>
		<router-link to="/bar">got to /bar</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
	import Vue from 'vue';
	import VueRouter from "vue-router";
	import Foo from './components/Foo.vue';
	import Bar from './components/Bar.vue';
	Vue.use(VueRouter);
	const routes = [
		{
			path: '/foo',
			component: Foo
		},
		{
			path: '/bar',
			component: Bar
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

</style>
