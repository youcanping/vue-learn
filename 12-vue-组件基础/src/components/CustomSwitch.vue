<template>
	<label class="switch">
		<input type="checkbox"
			   class="switch__input"
			   :checked="checked"
			   @change="$emit('change', $event.target.checked)"
		>
		<div class="switch__toggle">
			<div class="switch__handle"></div>
		</div>
	</label>
</template>

<script>
    export default {
    	model:{
			prop: "checked",
			event: "change"
		},
		props: {
    		checked: Boolean,
			default: false
		}
    }
</script>

<style scoped>
	.wrapper{
		width: 100%;
		text-align: center;
		/*padding: 5%;*/
		/*font-size: 60px;*/
		color: lightseagreen;
		margin: 1em 0;
	}

	.switch {
		display: inline-block;
		vertical-align: top;
		box-sizing: border-box;
		background-clip: padding-box;
		position: relative;
		min-width: 51px;
		font-size: 17px;
		padding: 0 20px;
		border: none;
		overflow: visible;
		width: 51px;
		height: 32px;
		z-index: 0;
		text-align: left;
	}
	.switch__input {
		position: absolute;
		right: 0;
		top: 0;
		left: 0;
		bottom: 0;
		padding: 0;
		border: 0;
		background-color: transparent;
		z-index: 1;
		vertical-align: top;
		outline: none;
		width: 100%;
		height: 100%;
		margin: 0;
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		z-index: 0;
	}
	/* switch toggle background */
	.switch__toggle {
		background-color: white;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 30px;
		transition-property: all;
		transition-duration: 0.35s;
		transition-timing-function: ease-out;
		box-shadow: inset 0 0 0 1px #e5e5e5;
	}
	/* switch toggle circle */
	.switch__handle {
		box-sizing: border-box;
		background-clip: padding-box;
		position: absolute;
		content: '';
		border-radius: 28px;
		height: 28px;
		width: 28px;
		background-color: white;
		left: 1px;
		top: 2px;
		transition-property: all;
		transition-duration: 0.35s;
		transition-timing-function: cubic-bezier(.59, .01, .5, .99);
		box-shadow: 0 0 1px 0 rgba(0, 0, 0, .25), 0 3px 2px rgba(0, 0, 0, .25);
	}
	.switch--active__handle {
		transition: none;
	}
	:checked + .switch__toggle {
		box-shadow: inset 0 0 0 1px #44db5e;
		background-color: #44db5e;
	}
	:checked + .switch__toggle > .switch__handle {
		left: 21px;
		box-shadow: 0 3px 1px rgba(0, 0, 0, .25);
	}
	:disabled + .switch__toggle {
		opacity: 0.3;
		cursor: default;
		pointer-events: none;
	}
	.switch__touch {
		position: absolute;
		top: -5px;
		bottom: -5px;
		left: -10px;
		right: -10px;
	}
</style>
