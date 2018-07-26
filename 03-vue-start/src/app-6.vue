<template>
	<div>
		<h3>{{ message }}</h3>
		<label for="input">请输入：</label><input id="input" v-model="message"/>
	</div>
</template>
<!--
	使用v-on绑定事件
-->
<script>
    export default {
		data() {
        	return {
        		message: "Hello Vue.js"
			}
		}
    }
</script>

<style scoped>
	div{
		text-align: center;
	}
</style>
