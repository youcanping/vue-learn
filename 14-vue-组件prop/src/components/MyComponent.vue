<template>
	<div>
		<p>propA - {{propA}}</p>
		<p>propB - {{propB}}</p>
		<p>propC - {{propC}}</p>
		<p>propD - {{propD}}</p>
		<p>propE - {{propE}}</p>
		<p>propF - {{propF}}</p>
		<p>propG - {{propG}}</p>
	</div>
</template>

<script>
    export default {
        name: "my-component",
		props:{
        	propA: String,
			propB: [String, Number],
			propC: {
        		type: String,
				required: true
			},
			propD: {
        		type: Number,
				default: 50
			},
			propE: {
        		type: Object,
				default: function () {
					return {message: "Hello Vue.js"}
				}
			},
			propF: {
        		type: String,
        		validator: function (val) {
					return ["success", "warning", "danger"].indexOf(val) !== -1;
				}
			},
			propG: {
        		type: Boolean,
				default: false
			}
		}
    }
</script>

<style scoped>
	div{
		background: lightblue;
	}
	p{
		background: lightcoral;
		color: #ffffff;
	}
</style>
