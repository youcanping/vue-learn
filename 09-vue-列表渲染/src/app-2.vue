<template>
	<div>
		<ul>
			<li v-for="(value, key, index) of user" :key="">
				{{ index }} - {{ key }} - {{ value }}
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		user: {
        			id: "9988",
					firstName: "John",
					lastName: "Doe",
					age: 30
				}
			}
		}
    }
</script>

<style scoped>

</style>
