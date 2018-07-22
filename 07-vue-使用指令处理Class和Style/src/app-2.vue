<template>
	<div>
		<!--绑定class，为了简化模板写法，也可以绑定对象属性-->
		<p class="static" v-bind:class="classObject">
			Hello Vue.js
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		classObject: {
					active: true,
					'text-danger': true
				}
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
