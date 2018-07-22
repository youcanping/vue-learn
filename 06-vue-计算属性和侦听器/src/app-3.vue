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
				lastName: "can ping"
			}
		},
		computed: {
			fullName: {
				set(val){
					let names = val.split(" ");
					this.firstName = names[0];
					this.lastName = names[names.length -1];
				},
				get(){
					return this.firstName + " "+ this.lastName;
				}
			}
		}
	}
</script>

<style scoped>

</style>
