<template>
	<div
		:id="lockId"
		class="lm-lock"
	>
	</div>
</template>

<script>
	import PatternLock from "patternlock";

	/**
	 * 手势密码组件
	 * @version 0.0.1
	 * @description 预置2种手势密码风格，style-a:直销风格，style-b:个人手机风格
	 */
	export default {
		name: "LmLock",
		data:()=>{
			return {
				lock: null
			}
		},
		props: {
			/**
			 * @description 手势密码的容器指定唯一id
			 */
			lockId: {
				type: String,
				default: "lm-lock-holder"
			},
			/**
			 * @description 指定手势密码页面的风格，lock-a:直销银行分格，lock-b:手机银行风格
			 */
			lockStyle: {
				type: String,
				default: "lock-a",
				validator: (val)=>{
					return ["lock-a", "lock-b"].indexOf(val) !== -1;
				}
			},
			/**
			 * @description 设置手势区域圆的外边距、圆的半径和输出结果的分隔符
			 */
			lockOption: {
				type: Object,
				default: ()=>{
					return {
						margin: 20,
						radius: 25,
						delimiter: ""
					};
				}
			},
			/**
			 * @description 设置手势密码内置对象的外部引用，用于方法调用
			 */
			lockRef: {
				type: Object
			}
		},
		mounted(){
			this.lock = new PatternLock("#"+this.lockId);
			/**
			 * @event onDraw
			 * @type Function
			 * @description  监听手势绘画
			 * */
			this.lock.option("onDraw", (pattern)=>{
				this.$emit('onDraw', pattern)
				this.lockRef.error()
			});
			console.log("ref="+this.lockRef);
			if(this.lockRef && this.lock){
				/**
				 * @event reset 重置手势密码
				 * @return void
				 */
				this.lockRef = this.lock;
				// this.lockRef.reset = this.lock.reset;
				// this.lockRef.error = this.lock.error;
				// this.lockRef.getValue = this.lock.getPattern;
				// this.lockRef.disable = this.lock.disable;
				// this.lockRef.enabled = this.lock.enabled;
			}
		}
	}
</script>

<style lang="stylus">
	.patt-holder{background: transparent;  -ms-touch-action: none;}
	.patt-wrap{
		/*position:relative; */
		cursor:pointer;
	}
	.patt-wrap:after{
		content: "";
		clear: both;
		display: block;
	}
	.patt-wrap ul, .patt-wrap li{
		list-style: none;
		margin:0;
		padding: 0;
	}
	.patt-circ{
		position:relative;
		float: left;
		box-sizing: border-box;
		-moz-box-sizing: border-box;
	}
	.patt-circ.hovered{
		border:1px solid #2B9AE4;
	}

	.patt-error .patt-circ.hovered{
		border-color: #FB3F4D;
	}
	.patt-error .patt-circ.hovered .patt-dots{
		background: #FB3F4D;
	}
	.patt-error .patt-lines:after{
		background: #FB3F4D;
	}
	.patt-error .patt-lines:before{
		border-color: transparent  transparent transparent #FB3F4D;
	}

	.patt-hidden .patt-circ.hovered{border:0;}

	.patt-dots{
		background: #D5DBE8;
		width: 20px;height: 20px;
		border-radius:10px;
		position:absolute;
		top:50%;
		left:50%;
		transform: translateX(-50%) translateY(-50%);
		-webkit-transform: translateX(-50%) translateY(-50%);
	}
	.patt-circ.hovered .patt-dots{
		background: #2B9AE4;
	}
	.patt-lines{
		height: 11px;
		background: transparent;
		position: absolute;
		-webkit-transform-origin:5px 5px;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
	.patt-lines:after{
		content: "";
		display: block;
		height: 1px;
		background: #2B9AE4;
		margin: 5px 30px;
	}
	.patt-lines:before{
		content: "";
		display: inline-block;
		height:0;
		width:0;
		overflow: hidden;
		font-size: 0;
		line-height: 0;
		border-color: transparent  transparent transparent #2B9AE4;
		border-style: dashed dashed dashed solid;
		border-width:4px;
		float: left;
		margin-top: 1px;
		margin-left: 20px;
	}
	.patt-hidden .patt-lines{
		display:none;
	}
</style>
