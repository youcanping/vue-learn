<template>
	<div>
		<p>
			<!--在点击事件使用方法名-->
			<button v-on:click="greet">点击我</button>
		</p>
		<hr>
		<p>
			<button v-on:click="say('您好')">打招呼</button>
		</p>
		<hr>
		<p>
			<button v-on:click="sayWithEvent('您好',$event)">打招呼</button>
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
				counter: 0
			}
		},
		methods:{
        	greet: function (event) {
				alert("Hello "+this+" !");
				console.log(this);
				if(event){
					alert(event.target.tagName);
				}
			},
			say: function (message) {
				alert("say："+message);
			},
			sayWithEvent: function (message, event) {
        		if(event){
        			event.preventDefault();
				}
				alert("say:"+message);
			}
		}
    }
</script>

<style scoped>

</style>
