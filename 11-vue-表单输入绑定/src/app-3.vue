<template>
<p>
	<label>
		值绑定={{toggle}}
		<input type="checkbox"
			   v-model="toggle"
			   true-value="yes"
			   false-value="no"
		/>
	</label>
</p>
</template>

<script>
    export default {
        name: "app-2",
		data(){
        	return {
        		toggle: ""
			}
		}
    }
</script>

<style scoped>

</style>
