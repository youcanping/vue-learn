<template>
	<div>
		<button
			v-for="tab in tabs"
			v-bind:key="tab"
			v-bind:class="['tab-button', { active: currentTab === tab }]"
			v-on:click="currentTab = tab"
		>{{ tab }}</button>
		<keep-alive>
			<component
				v-bind:is="currentTabComponent"
				class="tab"
			/>
		</keep-alive>
	</div>
</template>
<script>
	import TabPosts from "./components/TabPosts.vue";
	import TabArchive from "./components/TabArchive.vue";
	export default {
		components: {
			TabPosts,
			TabArchive
		},
		data: function () {
			return {
				currentTab: 'Posts',
					tabs: ['Posts', 'Archive']
			}
		},
		computed: {
			currentTabComponent: function () {
				return 'tab-' + this.currentTab.toLowerCase()
			}
		}
	}
</script>

<style scoped>

</style>
