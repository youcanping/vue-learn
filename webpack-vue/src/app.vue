<template>
    <div> Hello {{ name }}</div>
</template>

<script>
    export default {
        name: "app",
        data () {
            return {
                name: "Vue.js"
            }
        }
    }
</script>

<style scoped>
    div{
        color: #F60;
        font-size: 24px;
    }
</style>