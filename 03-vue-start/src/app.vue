<template>
	<div>{{message}}</div>
</template>
<!--
	使用简洁模板语法与data数据进行绑定
-->
<script>
    export default {
        name: "app",
		data() {
        	return {
        		message: "Vue.js"
			}
		}
    }
</script>

<style scoped>
	div{
		background: lightseagreen;
		font-size: 1.2em;
		color: #ffffff;
		text-align: center;
	}
</style>
