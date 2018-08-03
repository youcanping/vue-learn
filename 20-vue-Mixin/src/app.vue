<template>
	<div>
	</div>
</template>
<script>
	import Vue from 'vue';
	Vue.mixin({
		created(){
			let myOption = this.$options.myOption;
			if(myOption){
				console.log("hello myOption");
			}
		}
	});
	const MyMixin = {
		created(){
			console.log('混入对象的钩子被调用');
			this.hello();
		},
		data(){
			return {
				message: "from Mixin",
				fooo: "abc",
				obj: {
					a: 'a',
					b: {
						b1: "b1",
						c1: 'c1',
						obj: {
							a: 1,
							b: 2,
							c: 3
						}
					},
					c: 'c'
				}
			}
		},
		methods: {
			hello(){
				console.log(`hello from MyMixin`);
			},
			conflicting(){
				console.log("from mixin");
			},
			bar(){
				console.log("bar");
			}
		}
	};
	const Component = Vue.extend({
		mixins: [MyMixin],
		myOption: "myOption",
		data(){
		 	return {
		 		message: "from component",
				barr: "123",
				obj: {
					a: 'a2',
		 			b: {
		 				b1: 'b2',
						obj: {
		 					a: 11,
							b: 22
						}
					}
				}
			}
		},
		created(){
			console.log('组件的钩子被调用');
		 	console.log(this.$data);
		 	this.conflicting();
		},
		methods: {
			conflicting(){
		 		console.log("from component")
			},
			foo(){
				console.log("foo")
			}
		}
	 });
	const component =  new Component();
	export default component;
</script>
<style scoped>
</style>
