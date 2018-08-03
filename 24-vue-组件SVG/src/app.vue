<template>
	<div>
		<china></china>
		<icon-svg-transfer></icon-svg-transfer>
		<icon-svg></icon-svg>
	</div>
</template>
<script>
	// import china from './components/china.vue';
	import IconSvgTransfer from "./components/IconSvgTransfer.vue"
	import IconSvg from "./components/IconSvg.vue";
	import China from "./components/china.vue";
	export default {
		name: "app",
		components: {
			// china,
			China,
			IconSvgTransfer,
			IconSvg
		}
	}
</script>
<style scoped>
</style>
