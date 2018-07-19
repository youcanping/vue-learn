<template>
    <div>
		<h1>Hello World</h1>
		<p v-once>
			Hello {{ name }}
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                name: "Vue.js"
            }
        }
    }
</script>

<style scoped>
</style>
