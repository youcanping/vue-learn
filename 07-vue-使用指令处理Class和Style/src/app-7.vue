<template>
	<div>
		<!--绑定style，实际上是一个style对象，属性可以是驼峰命名法，也可以是短横杠命名法（需要用引号包起来）-->
		<p v-bind:style="{background: '#008833', fontSize: 24+'px'}" >
			Hello Vue.js
		</p>
	</div>
</template>

<script>
    export default {
        name: "app"
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
