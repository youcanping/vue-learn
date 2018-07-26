<template>
	<div>
		<p v-if="seen">我显示了</p>
	</div>
</template>
<!--
	元素控制是否显示, v-if 会把dom从文档树中移除，添加
-->
<script>
    export default {
		data() {
        	return {
        		seen: true
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
		width: 100%;
		height: 50px;
	}
</style>
