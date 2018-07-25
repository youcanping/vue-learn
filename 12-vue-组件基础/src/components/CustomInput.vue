<template>
    <div>
		<input type="text" v-bind:value="value" v-on:change="$emit('input', $event.target.value)"/>
	</div>
</template>

<script>
    export default {
        name: "custom-input",
		props: ["value"]
    }
</script>

<style scoped>

</style>
