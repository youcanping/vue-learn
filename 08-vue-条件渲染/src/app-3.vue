<template>
	<div>
		<h1>v-if 切换多个元素</h1>
		<template v-if="isOK">
			<h2>切换多个元素</h2>
			<p>元素一</p>
			<p>元素二</p>
		</template>
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
