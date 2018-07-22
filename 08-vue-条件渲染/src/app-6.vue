<template>
	<div>
		<h1>v-show</h1>
		<!-- v-show 不可以应用在template中，也不能应用在v-else中 -->
		<p v-show="isShow">v-show 显示了</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		isShow: true
			}
		}
    }
</script>

<style scoped>

</style>
