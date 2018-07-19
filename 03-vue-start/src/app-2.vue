<template>
	<div>{{message}}</div>
</template>

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
