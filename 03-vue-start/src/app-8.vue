<template>
	<div>
		<button>按钮</button>
	</div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
	div{
		width: 100%;
	}
	button{
		display: inline-block;
		width: 100%;
		padding: 0.9em;
		outline: none;
		background: lightseagreen;
		font-size: 1em;
		border-radius: 0.1em;
		-webkit-appearance: button;
	}
	button:link,button:visited,button:hover{
		background: lightseagreen;
	}
	button:active{
		background: darkseagreen;
	}
</style>
