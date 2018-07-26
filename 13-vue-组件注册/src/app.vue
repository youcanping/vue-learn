<template>
	<div>
		<component-a></component-a>
		<ComponentB></ComponentB>
		<component-c></component-c>
	</div>
</template>

<script>
	import components from "./components/ComponentMain"
	// import ComponentA from './components/ComponentA.js'
    console.log("components="+JSON.stringify(components));
    export default components
</script>

<style scoped>

</style>
