<template>
	<div>
		<button v-on:click="isShow = !isShow">按钮</button>
		<transition name="fade">
			<p v-if="isShow"></p>
		</transition>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				isShow: true
			}
		}
	}
</script>

<style scoped>
	p{
		width: 100px;
		height: 100px;
		background: blue;
	}
	.fade-enter-active, .fade-leave-active{
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to{
		opacity: 0;
	}
</style>
