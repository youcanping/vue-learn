<template>
    <div class="blog-post">
		<h3>{{id}}-{{post.title}}</h3>
		<div class="content"  v-html="post.content"></div>
		<button @click="$emit('enlarge-text', 0.2)">放大字体</button>
	</div>
</template>

<script>
    export default {
		props: ["title", "id", "post"]
    }
</script>

<style scoped>
	.blog-post{
		background: lightgoldenrodyellow;
	}
	.blog-post h3{
		color: cornflowerblue;
	}
	.blog-post > .content{
		background: lightblue;
	}
</style>
