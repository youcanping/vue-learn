<template>
	<div>
		<svg  >
			<use v-bind:xlink:href="id" />
		</svg>
	</div>
</template>
<script>
	import chinaSvg from "./svg/china.svg"
	console.log(chinaSvg.viewBox);
	console.log(chinaSvg.id);
    export default {
        name: "china",
		data(){
        	return {
        		viewBox: chinaSvg.viewBox+"",
				id: "#"+chinaSvg.id
			}
		}
    }
</script>

<style scoped>

</style>
