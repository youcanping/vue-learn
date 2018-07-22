<template>
	<div>
		<h1>v-if v-else</h1>
		<h2 v-if="isOK">YES</h2>
		<!-- v-else无需赋值 -->
		<h2 v-else>NO</h2>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		isOK: true
			}
		}
    }
</script>

<style scoped>

</style>
