<template>
	<div>
		<!--绑定style，使用数组语法，可以添加多个对象样式，后面的比前面的优先级高-->
		<p v-bind:style="[baseStyle, overrideStyle]" >
			Hello Vue.js
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		baseStyle: {
        			background: "#666666",
					color: "#ffffff",
					fontSize: "18px"
				},
				overrideStyle: {
        			color: "#006688",
					fontSize: "24px"
				}
			}
		}
    }
</script>
<style>
	p{
		height: 100px;
	}
</style>
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
