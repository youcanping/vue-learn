<template>
	<ul>
		<li v-for="todo of todos" v-bind:key="todo.id">
			<slot v-bind:todo="todo">
				{{todo.text}}
			</slot>
		</li>
	</ul>
</template>

<script>
    export default {
        name: "todo-list",
		props: {
			todos: Array
		}
    }
</script>

<style scoped>
	ul{
		list-style: none;
		width: 100%;
		padding: 0;
		margin: 0;
	}
	li{
		padding: .7em;
	}
	li:not(:nth-last-of-type){
		border-bottom: 1px solid #eeeeee;
	}
</style>
