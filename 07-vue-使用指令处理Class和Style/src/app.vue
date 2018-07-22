<template>
	<div>
		<!--绑定class，可以绑定一个对象的复杂写法-->
		<p class="static" v-bind:class="{active: isActive, 'text-danger': hasError}">
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
		color: #FFFFFF
	}
	.active {
		background-color: green;
	}
	.text-danger {
		background-color: red;
	}
</style>
