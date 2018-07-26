<template>
    <div>
		<ul>
			<li v-for="item in todos">{{ item.text }}</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "app-7",
		data(){
        	return {
        		todos: [
        			{ text: "学习 JavaScript"},
        			{ text: "学习 Vue"},
        			{ text: "学习 css"},
        			{ text: "学习 html"},
        			]
			}
		}
    }
</script>

<style scoped>

</style>
