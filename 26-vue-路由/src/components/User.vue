<template>
	<div class="user-view">
		<h1>User</h1>
		<pre>$route.params = {{ JSON.stringify($route.params, null, 2) }}</pre>
		<pre>$route.query = {{ JSON.stringify($route.query, null, 2) }}</pre>
		<pre>$route.hash = {{ JSON.stringify($route.hash, null, 2) }}</pre>
		<button @click="$router.go(-1)">$route.go(-1) 后退</button>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        name: "user",
		watch: {
        	['$route']: function (to, from) {
				console.log(to);
				console.log(from);
			}
		},
		beforeRouteUpdate(to, from, next){
        	console.log("beforeRouteUpdate");
			console.log(to);
			console.log(from);
			next();
		}
    }
</script>

<style scoped>
	.user-view{
		border: blue solid 2px;
	}
</style>
