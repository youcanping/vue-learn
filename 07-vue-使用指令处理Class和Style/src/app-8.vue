<template>
	<div>
		<!--绑定style，实际上是一个style对象，属性可以是驼峰命名法，也可以是短横杠命名法（需要用引号包起来）-->
		<p v-bind:style="styleObject" >
			Hello Vue.js
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		styleObject: {background: '#008833', 'font-size': '24px'}
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
