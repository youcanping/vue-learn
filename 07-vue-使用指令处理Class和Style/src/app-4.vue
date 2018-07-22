<template>
	<div>
		<!--绑定class，使用数组语法-->
		<p class="static" v-bind:class="[activeClass, errorClass]">
			Hello Vue.js
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		activeClass: "active",
				errorClass: "text-danger"
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
