<template>
    <div>
		<slot>标题</slot>
	</div>
</template>

<script>
    export default {
        name: "page-header"
    }
</script>

<style scoped>
	div{
		height: 44px;
		text-align: center;
		line-height: 44px;
		background: lightseagreen;
		color: #FFFFFF;
		font-size: 1.2em;
	}
</style>
