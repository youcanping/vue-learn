<template>
	<div>
		<InsButton>1</InsButton>
		<InsButton>1</InsButton>
		<CustomInput v-model="inputValue"></CustomInput>{{inputValue}}
		<CustomSwitch @change="switchChange"  v-model="switchValue"></CustomSwitch>
		{{switchValue}}
		<div >
			<blog-post v-for="post in posts"
					  v-bind:id="post.id"
					  v-bind:key="post.id"
					  v-bind:title="post.title"
					  v-bind:post="post"
					  v-bind:style="{fontSize: postFontSize+'em'}"
					  v-on:enlarge-text="onEnlargeText"
			></blog-post>
		</div>
	</div>
</template>

<script>
	import InsButton from "./components/InsButton.vue";
	import BlogPost from "./components/blog-post.vue";
	import CustomSwitch from "./components/CustomSwitch.vue";
	import CustomInput from "./components/CustomInput.vue";
    export default {
        name: "app",
		components: {
			InsButton,
			BlogPost,
			CustomSwitch,
			CustomInput
		},
		data(){
        	return {
        		switchValue: true,
        		postFontSize: 1,
				inputValue: "",
        		posts: [
					{
						id:"01",
						title: "JS原生对象",
						content: "Date、String、Number、Boolean、Null、Undefined"
					},
					{
						id:"02",
						title:"谈谈CSS布局",
						content: "position: absolute/relative/fixed"
					},
					{
						id:"03",
						title:"html入门",
						content: "网页标题"
					}
				]
			}
		},
		methods:{
			switchChange:function (flag) {
				console.log("switchChange=" + flag);
			},
			onEnlargeText: function (enlargeAmount) {
				this.postFontSize += enlargeAmount
			}
		}
    }
</script>

<style scoped>
</style>
