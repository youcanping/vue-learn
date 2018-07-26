<template>
	<label>
		<span>{{ label }}</span> <input
		v-bind="$attrs"
		type="checkbox"
		v-bind:checked="checked"
		v-on:change="$emit('change', $event.target.checked)"
	/>
	</label>
</template>

<script>
    export default {
        name: "base-checkbox",
		inheritAttrs: false,
		model: {
        	prop: "checked",
			event: "change"
		},
		props: {
        	checked: Boolean,
			label: String
		}
    }
</script>

<style scoped>

</style>
