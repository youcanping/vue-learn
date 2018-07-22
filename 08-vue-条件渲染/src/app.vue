<template>
	<div>
		<h1>主标题</h1>
		<h2 v-if="hasSubTitle">副标题 </h2>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		hasSubTitle: true
			}
		}
    }
</script>

<style scoped>

</style>
