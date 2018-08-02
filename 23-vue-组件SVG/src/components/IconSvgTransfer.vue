<template>
	<svg  width="100px" height="100px" color="#666666">
		<use v-bind:xlink:href="id"></use>
	</svg>
</template>

<script>
	import svgTransfer from "./svg/123.svg";
    export default {
        name: "icon-svg-transfer",
		data(){
        	return {
        		viewBox: JSON.stringify(svgTransfer.viewBox),
				id: '#'+svgTransfer.id
			}
		}
    }
</script>

<style scoped>

</style>
