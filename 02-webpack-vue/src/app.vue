<template>
    <div>
		<h1>Hello World</h1>
		Hello {{ name }}
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
    div{
        color: #F60;
        font-size: 24px;
    }
	div>h1{
		color: blue;
	}
</style>
