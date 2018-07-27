<template>
	<page-layout>
		<PageHeader slot="header">组件插槽</PageHeader>
		<navigation-link url="http://www.jd.com">京东商城</navigation-link>
		<todo-list v-bind:todos="todos">
			<!--slot-scope可以写在template上-->
			<template slot-scope="slotProps">
				<span v-if="slotProps.todo.isComplete">✓ ✔➕️</span>
				{{slotProps.todo.text}}
			</template>
		</todo-list>
		<todo-list v-bind:todos="todos">
			<!-- slot props 解构-->
			<template slot-scope="{ todo }">
				<span v-if="todo.isComplete">✓</span>
				{{todo.text}}
			</template>
		</todo-list>
		<todo-list v-bind:todos="todos">
			<!-- 可以不用template -->
			<div slot-scope="{ todo }">
				<span v-if="todo.isComplete">✓</span>
				{{todo.text}}
			</div>
		</todo-list>
	</page-layout>
</template>
<script>
	import NavigationLink from './components/NavigationLink';
	import PageLayout from './components/PageLayout';
	import PageHeader from './components/PageHeader';
	import TodoList from './components/TodoList';
	export default {
		components: {
			PageLayout,
			NavigationLink,
			PageHeader,
			TodoList
		},
		data(){
			return {
				todos: [
					{
						id: "1",
						text: "A",
						isComplete: false
					},
					{
						id: "2",
						text: "B",
						isComplete: true
					},
					{
						id: "3",
						text: "C",
						isComplete: true
					},
					{
						id: "4",
						text: "D",
						isComplete: true
					},
				]
			}
		}
	}
</script>

<style scoped>

</style>
