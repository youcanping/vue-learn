<template>
    <div>
		<h1>导航守卫</h1>
		<p>
			{{ name }}
		</p>
		<pre>
			$route.params
			{{ $route.params }}
		</pre>
		<button @click="go(-1)">上一步</button>
	</div>
</template>
<!--导航守卫-->
<script>
    export default {
        name: "route-guards",
		props: {
        	name: {
        		type: String,
				default: "this is name."
			}
		},
		methods: {
			go(count){
				this.$router.go(count);
			}
		},
		beforeRouteEnter(to, from, next){
            //不可以访问 this
			console.log('----beforeRouteEnter-----');
			console.log(to);
			next();
		},
		beforeRouteUpdate(to, from, next){
			console.log('----beforeRouteUpdate-----');
			console.log(to);
			next();
		},
		beforeRouteLeave(to, from, next){
			console.log('----beforeRouteLeave-----');
			console.log(to);
			next();
		}
    }
</script>

<style scoped>

</style>
