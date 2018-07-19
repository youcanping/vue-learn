<template>
    <div>
		<a v-bind:href="url">{{ url }}</a><br>
		<a :href="url">{{url}}</a><br>
		<button v-on:click.prevent="click">按钮</button><br>
		<button @click.prevent="click">按钮</button>
	</div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
            	url: "http://www.baidu.com"
            }
        },
		methods: {
        	click: function () {
				console.log(this.$parent)
        	}
		}
    }
</script>

<style scoped>
</style>
