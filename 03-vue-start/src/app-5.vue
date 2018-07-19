<template>
	<div>
		<p v-show="show">我显示了</p>
	</div>
</template>
<!--
	元素控制是否显示s
	v-show: 只是控制元素的display属性
-->
<script>
    export default {
		data() {
        	return {
        		show: false
			}
		}
    }
</script>

<style scoped>
	div{
		background: pink;
		font-size: 1.2em;
		color: #ffffff;
		text-align: center;
		width: 100%;
		height: 50px;
	}
</style>
