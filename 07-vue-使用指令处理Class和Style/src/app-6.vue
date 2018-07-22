<template>
	<div>
		<!--绑定class，数组语法嵌套对象语法-->
		<p class="static" v-bind:class="[{active: isActive}, 'text-danger']">
			Hello Vue.js
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		isActive: true,
				hasError: true
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
