<template>
    <a target="_blank" v-bind:href="url">
		<slot></slot>
	</a>
</template>

<script>
    export default {
        name: "navigation-link",
		props: ["url"]
    }
</script>

<style scoped>
	a {
		display: inline-block;
		padding: 0.3em;
		background: lightblue;
		text-decoration: none;
		/*cursor: pointer;*/
	}
</style>
