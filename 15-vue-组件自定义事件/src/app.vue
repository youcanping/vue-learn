<template>
	<div>
		<base-checkbox label="选项一：" v-on:change="onChange" v-model="checkedValue"></base-checkbox>
		<base-input
			v-bind:label="`姓名`"
			v-model="name"
			@blur="blurHandler"
		></base-input>
		<p>{{name}}</p>
	</div>
</template>
<script>
	import BaseCheckbox from "./components/BaseCheckbox.vue";
	import BaseInput from "./components/BaseInput.vue"
	export default {
		components: {
			BaseCheckbox,
			BaseInput
		},
		data(){
			return {
				checkedValue: true,
				name: "张三"
			}
		},
		methods: {
			onChange: function (flag) {
				console.log("checked = "+flag);
			},
			blurHandler: function () {
				console.log("blur = "+ this.name);
			}
		}
	}
</script>

<style scoped>

</style>
