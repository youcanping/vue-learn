<template>
	<div>
		<p><label for="firstName">firstName：</label><input v-model="firstName" id="firstName"/></p>
		<p><label for="lastName">lastName：</label><input v-model="lastName" id="lastName"/></p>
		<!--<p><label for="fullName">fullName：</label><input v-model="fullName" id="fullName"/></p>-->
		<p>全名：{{fullName}}</p>
	</div>
</template>
<script>
	export default {
		name: "app",
		data(){
			return {
				firstName: "you",
				lastName: "can ping",
				fullName: "you can ping"
			}
		},
		watch: {
			firstName(newName, oldName){
				this.fullName = newName +" "+ this.lastName;
			},
			lastName(newName){
				this.fullName = this.firstName +" "+ newName;
			}
		}
	}
</script>

<style scoped>

</style>
