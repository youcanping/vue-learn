<template>
	<div  :id="lockId">

	</div>
</template>

<script>
	// import PatternLock from "patternlock";
	import PatternLock from "./PatternLock";
	console.log(PatternLock)
	export default {
		name: "lock",
		props: {
			lockId: {
				type: String,
				default: "#patternHolder"
			}
		},
		data:function () {
			return {
				lock: null
			}
		},
		created(){

		},
		mounted(){
			this.lock = new PatternLock("#"+this.lockId, {
				// enableSetPattern: false
			});
			this.lock.option("onDraw", (pattern)=>{
				//do something with pattern
				console.log(pattern);
				console.log(this.lock.getPattern())
				this.lock.reset()
			});
			// this.lock.setPattern('12587');
			this.lock.checkForPattern('1,2',function(){
				alert("You unlocked your app");
			},function(){
				alert("Pattern is not correct");
			});
		}
	}
</script>

<style>
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

	/*.patt-circ.dir:after{*/
	/*content: "";*/
	/*display: inline-block;*/
	/*height:0;*/
	/*width:0;*/
	/*overflow: hidden;*/
	/*font-size: 0;*/
	/*line-height: 0;*/
	/*border-color: transparent  transparent transparent #2B9AE4;*/
	/*border-style: dashed dashed dashed solid;*/
	/*border-width:4px;*/
	/*float: left;*/
	/*margin-top: 20px;*/
	/*margin-left: 40px;*/
	/*}*/
	/*.patt-circ.e {*/
	/*-webkit-transform: rotate(0);*/
	/*transform: rotate(0);*/
	/*}*/
	/*.patt-circ.s-e {*/
	/*-webkit-transform: rotate(45deg);*/
	/*transform: rotate(45deg);*/
	/*}*/
	/*.patt-circ.s {*/
	/*-webkit-transform: rotate(90deg);*/
	/*transform: rotate(90deg);*/
	/*}*/
	/*.patt-circ.s-w {*/
	/*-webkit-transform: rotate(135deg);*/
	/*transform: rotate(135deg);*/
	/*}*/
	/*.patt-circ.w {*/
	/*-webkit-transform: rotate(180deg);*/
	/*transform: rotate(180deg);*/
	/*}*/
	/*.patt-circ.n-w {*/
	/*-webkit-transform: rotate(225deg);*/
	/*transform: rotate(225deg);*/
	/*}*/
	/*.patt-circ.n {*/
	/*-webkit-transform: rotate(270deg);*/
	/*transform: rotate(270deg);*/
	/*}*/
	/*.patt-circ.n-e {*/
	/*-webkit-transform: rotate(315deg);*/
	/*transform: rotate(315deg);*/
	/*}*/
</style>
