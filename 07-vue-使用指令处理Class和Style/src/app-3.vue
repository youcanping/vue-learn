<template>
	<div>
		<!--绑定class，与计算属性结合-->
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
        		isActive: true,
				hasError: false
			}
		},
		computed: {
        	classObject(){
        		return {
					active: this.isActive && !this.hasError,
					'text-danger': !this.isActive && this.hasError
				}
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
		background-color: green;
	}
	.text-danger {
		background-color: red;
	}
</style>
