<template>
	<div>
		<h1>v-if v-else-if v-else</h1>
		<p v-if="type === 'A'">
			type A
		</p>
		<p v-else-if="type === 'B'">
			type B
		</p>
		<p v-else>
			not A or B
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		type: "A"
			}
		}
    }
</script>

<style scoped>

</style>
