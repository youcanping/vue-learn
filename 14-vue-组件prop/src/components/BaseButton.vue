<template>
    <div>
		<button class="123" v-bind="$attrs"><slot></slot></button>
	</div>
</template>

<script>
    export default {
        name: "base-button",
		inheritAttrs:false //根元素不继承非prop特性
    }
</script>

<style scoped>
	div{
		padding: 15px;
		/*background: #dddddd;*/
	}
	button{
		width: 100%;
		padding: 0.7em 0;
		font-size: 1em;
		outline: none;
		background: lightseagreen;
		color: #ffffff;
		border: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
	}
	button:link,button:hover,button:visited{
		background: lightseagreen;
	}
	button:active{
		background: #1b847c;
	}
	button:disabled{
		opacity: 0.3;
	}

</style>
