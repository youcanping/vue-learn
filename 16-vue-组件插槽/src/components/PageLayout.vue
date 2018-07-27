<template>
    <div data-role="page">
		<header data-role="page-header">
			<slot name="header"></slot>
		</header>
		<main data-role="page-content">
			<slot></slot>
		</main>
		<footer data-role="page-footer">
			<slot name="footer"></slot>
		</footer>
	</div>
</template>

<script>
    export default {
        name: "page-layout"
    }
</script>

<style scoped>
	@import "../css/BaseStyle.css";
	div[data-role="page"]{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: #FCFCFC;
		display: flex;
		flex-direction: column;
	}
	header[data-role="page-header"]{
		overflow: hidden;
	}
	main[data-role="page-content"]{
		flex: 1;
		overflow: auto;
		overflow-scrolling: touch;
		-webkit-overflow-scrolling: touch;
	}
	[data-role="page-content__wrapper"]{

	}
	footer[data-role="page-footer"]{

	}
</style>
