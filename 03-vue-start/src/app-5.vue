<template>
	<div>
		<h3>{{ message }}</h3>
		<button v-on:click="reverseMessage">字符串反转</button>
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
		},
		methods: {
			reverseMessage: function (e) {
				this.message = this.message.split("").reverse().join("");
			}
		}
    }
</script>

<style scoped>
	div{
		text-align: center;
	}
</style>
