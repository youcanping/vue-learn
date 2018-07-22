<template>
	<div>
		<!--绑定style，使用计算属性赋值-->
		<p v-bind:style="styleObject" >
			Hello Vue.js
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		computed: {
        	styleObject(){
        		return {background: '#008833', 'font-size': '24px'}
			}
		}
    }
</script>

<style scoped>
	.static{
		background: black;
		color: #ffffff;
	}
	.active {
		background-color: darkblue;
	}
	.text-danger {
		color: orangered;
	}
</style>
