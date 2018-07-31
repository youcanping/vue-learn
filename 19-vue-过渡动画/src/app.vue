<template>
	<div>
		<button v-on:click="isShow = !isShow">按钮</button>
		<transition name="fade">
			<p v-if="isShow"></p>
		</transition>
		<button @click="isShow2 = !isShow2">toggle</button>
		<transition name="slide-fade">
			<p v-if="isShow2"></p>
		</transition>
		<!--动画-->
		<button @click="isShow3 = !isShow3">toggle</button>
		<transition name="bounce">
			<p v-if="isShow3"></p>
		</transition>
		<!--使用animate.css-->
		<button @click="isShow4 = !isShow4">toggle</button>
		<transition name="custom-classes-transition"
					enter-active-class="animated tada"
					leave-active-class="animated bounceOutRight"
		>
			<div v-if="isShow4">hello vue.js</div>
		</transition>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isShow: true,
				isShow2: true,
				isShow3: true,
				isShow4: true
			}
		}
	}
</script>
<!--<link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css">-->
<style scoped>
	p{
		width: 100px;
		height: 100px;
		background: blue;
	}
	.fade-enter-active, .fade-leave-active{
		transition: opacity 3s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
	.slide-fade-enter-active{
		transition: all 0.8s ease-in-out;
	}
	.slide-fade-leave-active{
		transition: all 0.8s ease-in-out;
	}
	.slide-fade-enter, .slide-fade-leave-to{
		opacity: 0;
		transform: translateX(10px);
	}
	.bounce-enter-active{
		animation: bounce-in 0.5s;
	}
	.bounce-leave-active{
		animation: bounce-in 0.5s reverse;
	}
	@keyframes bounce-in {
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}
</style>
