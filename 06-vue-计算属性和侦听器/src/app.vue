<template>
	<div>
		<h1>字符串反转</h1>
		<p><label for="input">请输入：</label><input v-model="inputMessage" id="input"/></p>
		<p>反转字符串：{{ reverseMessage}}</p>
		<p>测试非响应式计算属性：{{ now}}</p>
	</div>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {
				inputMessage: "Hello Vue.js"
			}
		},
		computed: {
			reverseMessage(){
				//this指向的是当前Vue实例。
				//this实例代理了data对象里面的属性。
				return this.inputMessage.split("").reverse().join("");
			},
			now(){
				return Date.now();
			}
		}
	}
</script>

<style scoped>

</style>
