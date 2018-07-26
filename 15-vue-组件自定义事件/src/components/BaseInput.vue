<template>
    <label>
		{{  label }}
		<input type="text" v-bind:value="value" v-bind="$attrs" v-on="inputListeners"/>
	</label>
</template>

<script>
    export default {
        name: "base-input",
		inheritAttrs: false,
		props: ["label","value"],
		computed: {
        	inputListeners: function () {
				let self = this;
				return Object.assign({},
					this.$listeners,
					{
						input: function (e) {
							self.$emit("input", e.target.value);
						}
					}
				)
			}
		}
    }
</script>

<style scoped>
	input{
		border: 1px solid #eeeeee;
	}
</style>
