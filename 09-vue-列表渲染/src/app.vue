<template>
	<div>
		<ul>
			<!-- 遍历集合数组 -->
			<li v-for="book in books">
				{{ book.name }}
			</li>
		</ul>
		<hr>
		<ul>
			<!-- 可以指定第二个参数index -->
			<li v-for="(book, index) of books">
				{{ index }} - {{ book.name }}
			</li>
		</ul>
		<hr>
		<ul>
			<!-- v-for 和 template一起生成一组元素 -->
			<template v-for="(book, index) of books">
				<li>[{{ book.type }}]</li>
				<li>{{ book.name }}</li>
			</template>
		</ul>
		<hr>
		<ul>
			<li v-for=" n in 10">
				{{ n }}
			</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		codeBook: "编程书籍",
        		books: [
					{
						name: "JavaScript 高级程序设计",
						type: "JavaScript"
					},
					{
						name: "JavaScript 权威指南",
						type: "JavaScript"
					},
					{
						name: "CSS 揭秘",
						type: "CSS"
					},
					{
						name: "HTML5 入门",
						type: "HTML"
					}
				]
			}
		}
    }
</script>

<style scoped>

</style>
