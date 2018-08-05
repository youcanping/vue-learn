<template>
	<div>
		<h1>测试路由守卫</h1>
		<router-link :to="{name:'guard', params: {name: 'addfadf'}}">点击进入</router-link>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import RouteGuards from './components/RouteGuards.vue';
	Vue.use(VueRouter);
	const router = new VueRouter({
		routes:[
			{
				path: '/guard/:name',
				name: 'guard',
				component: RouteGuards,
				props: true,
				beforeEnter(to, from, next){
					console.log('----beforeEnter-----');
					next();
				}
			}
		]
	});
	router.beforeEach((to, from, next)=>{
		console.log("----beforeEach-----");
		console.log(to);
		next();
	});
	router.afterEach((to, from)=>{
		console.log("----afterEach-----");
		console.log(to);
	});
	router.beforeResolve((to, from, next)=>{
		console.log('----beforeResolve-----');
		console.log(to);
		next();
	});
    export default {
        name: "app-3",
		router: router
    }
</script>

<style scoped>
	.slide-enter-active, .slide-leave-active{
		transform: translateX(10px);
		transition: all .5s ease-in-out;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
