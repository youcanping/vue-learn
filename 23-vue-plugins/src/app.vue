<template>
	<div>
		<base-input v-focus></base-input>
		<div v-demo:foo.a.b="'message'"></div>
	</div>
</template>
<script>
	import BaseInput from './components/BaseInput.vue';
	import focus from './directives/focus';
	import demo from './directives/demo';
	export default {
		name: "app",
		components: {
			BaseInput
		},
		directives: {
			focus,
			demo
		}
	}
</script>
<style scoped>
</style>
