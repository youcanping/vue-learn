<template>
	<div>
		<lottie :options="defaultOptions" :height="100" :width="100" v-on:animCreated="handleAnimation" />
	</div>
</template>

<script>
	// import CheckMarkSuccess from './components/CheckMarkSuccess.vue'
	import * as animationData from "../lotties/CheckMarkSuccessData.json";
	import Vue from 'vue'
	import lottie from 'vue-lottie';
	Vue.component('lottie', lottie);
	export default {
		data(){
			return {
				defaultOptions: { animationData: animationData ,renderer: 'canvas', loop: false},
				animationSpeed: 1,
				anim: null
			}
		},
		methods: {
			handleAnimation: function(anim) {
				this.anim = anim;
				// console.log(anim); //这里可以看到 lottie 对象的全部属性
			},
		}
	}
</script>

<style scoped>

</style>
