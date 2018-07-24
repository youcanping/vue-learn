<template>
	<div>
		<button v-on:click="counter+=1">count++ {{counter}}</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				counter: 0
			}
		}
	}
</script>

<style scoped>
	button{
		outline: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		width: 200px;
		height: 44px;
		background: lightseagreen;
		color: #FFFFFF;
		line-height: 44px;
		font-size: 16px;
		border: #eeeeee;
		margin: 10px;
	}
	button:link,button:hover,button:visited{
		background: lightseagreen;
	}
	button:active{
		background: #17746c;
	}
</style>
