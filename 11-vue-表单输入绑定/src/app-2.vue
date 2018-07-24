<template>
<p>
	<select v-model="selected">
		<option disabled value="">--请选择--</option>
		<!--属性值用 v-bind:value 绑定-->
		<option v-for="option of options" v-bind:value="option.value">{{option.text}}</option>
	</select>
</p>
</template>

<script>
    export default {
        name: "app-2",
		data(){
        	return {
				selected: "B",
				options: [
					{
						text: "one", value: "A"
					},
					{
						text: "two", value: "B"
					},
					{
						text: "three", value: "C"
					},
				]
			}
		}
    }
</script>

<style scoped>

</style>
