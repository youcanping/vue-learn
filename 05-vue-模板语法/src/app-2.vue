<template>
    <div>
		<button v-show="show" v-bind:disabled="buttonDisabled">按钮</button>
	</div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
            	show: true,
                buttonDisabled: true
            }
        }
    }
</script>

<style scoped>
</style>
