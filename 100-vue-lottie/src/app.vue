<template>
	<div class="container">
		<check-mark-success></check-mark-success>
		<lottie-animation :source="animationData" :auto-play="true" :speed="1" :loop="true" :style="{width: '100px', height: '100px', color: 'red'}"></lottie-animation>
	</div>
</template>
<script>
	import CheckMarkSuccess from './components/CheckMarkSuccess.vue';
	import LottieAnimation from './components/LottieAnimation.vue';
	import CheckMarkSuccessData from './lotties/CheckMarkSuccessData.json';
	export default {
		data(){
			return {
				animationData: 	CheckMarkSuccessData,
				srcPath: ''
			}
		},
		components:{
			CheckMarkSuccess,
			LottieAnimation
		}
	}
</script>
<style scoped>
	.container{
		border: 1px solid #334455;
	}
</style>
