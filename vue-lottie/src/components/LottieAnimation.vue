<template>
	<div class="lottie-container"
		ref="container"
	>
	</div>
</template>

<script>
	import lottie from 'lottie-web';
	const path = require('path');
    export default {
        name: "lottie-animation",
		props:{
			rendererSettings:{
        		type: Object,
				default(){
        			return {}
				}
			},
			renderer: {
				type: String,
				default: 'svg'
			},
        	source: {
        		type: [String, Object],
				required: true
			},
			autoPlay: {
        		type: Boolean,
				default: true
			},
			speed: {
        		type: Number,
				default: 1,
				validator(val){
					return val >=0;
				}
			},
			loop: {
        		type: Boolean,
				default: false
			}
		},
		data(){
        	return {
				lottie: null
			}
		},
		created(){
        	// this.srcPath = require(this.source);
		},
		mounted(){

			const option = {
				container: this.$refs.container,
				renderer: this.renderer,
				loop: this.loop,
				autoplay: this.autoPlay,
				rendererSettings: this.rendererSettings
			};
			option.animationData = this.source;
		 	this.lottie =	lottie.loadAnimation(option);
		 	this.lottie.setSpeed(this.speed);
		},
		methods: {
			handlePlay(){
				this.lottie.play()
			}
		}
    }
</script>

<style scoped>

</style>
