<template>
<div>
	<p>
		<label>
			修饰符(v-model.lazy) <input type="text" v-model.lazy="text"/>
		</label>
		<br>
		<span>{{text}}</span>
	</p>
	<p>
		<label>
			修饰符(v-model.number) <input type="number" v-model.number="number"/>
		</label>
		<br>
		<span>{{number}}</span>
	</p>
	<p>
		<label>
			修饰符(v-model.trim) <input type="text" v-model.trim="trimText"/>
		</label>
		<br>
		<span>{{trimText}}</span>
	</p>

</div>
</template>

<script>
    export default {
        name: "app-2",
		data(){
        	return {
				text: "",
				number: "",
				trimText: ""
			}
		}
    }
</script>

<style scoped>

</style>
