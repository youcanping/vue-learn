<template>
	<div>
		<h1>路由组件参数</h1>
		<p>name: {{name}} -attrs = {{ $attrs }}</p>
	</div>
</template>

<script>
    export default {
        name: "hello",
		props: {
			name: {
				type: String,
				default: "Vue.js"
			}
		}
    }
</script>

<style scoped>

</style>
