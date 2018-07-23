<template>
	<div>
		<!--在点击事件中，加表达式-->
		<button v-on:click="counter += 1">+1</button>
		<p>点击按钮，数字加1，{{counter}}</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
				counter: 0
			}
		}
    }
</script>

<style scoped>

</style>
