<template>
	<div>
		<my-component
			prop-a="abc"
			prop-b="123"
			prop-c="HELLO"
			v-bind:prop-d="123"
			v-bind:prop-e="{name: 'jack'}"
			prop-f="success"
			v-bind:prop-g="true"
			v-bind:propH="'非声明特性'"
		></my-component>
		<base-button
			height="100px"
			v-bind:style="{background:'#893394'}"
			class="iss-button"
			style="height: 60px"
			disabled="disabled"
			value="123"
			propA="bbb"
		>按钮</base-button>
	</div>
</template>

<script>
	import MyComponent from "./components/MyComponent.vue";
	import BaseButton from "./components/BaseButton.vue"
	export default {
		components: {
			MyComponent,
			BaseButton
		},
		data(){
			return {
				name:"button-"
			}
		}
	}
</script>

<style scoped>

</style>
