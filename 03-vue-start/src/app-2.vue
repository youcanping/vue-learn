<template>
	<div v-bind:title="message">
		悬停基本看看变化
	</div>
</template>
<!--
	使用v-bind指令与data数据进行绑定
-->
<script>
    export default {
		data() {
        	return {
        		message: "页面加载于" + new Date().toLocaleString()
			}
		}
    }
</script>

<style scoped>
	div{
		background: cornflowerblue;
		font-size: 1.2em;
		color: #ffffff;
		text-align: center;
	}
</style>
