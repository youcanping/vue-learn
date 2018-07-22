<template>
	<div>
		<h1>v-if 使用key</h1>
		<template v-if="loginType === 'username'">
			<label for="username">username:</label><input id="username" placeholder="请输入用户名" key="username-input"/>
		</template>
		<template v-else-if="loginType === 'email'">
			<label for="email">email:</label><input id="email" placeholder="请输入邮箱名" key="email-input"/>
		</template>
		<p>
			<button @click="toggleLoginType">切换登录方式</button>
		</p>
	</div>
</template>

<script>
    export default {
        name: "app",
		data(){
        	return {
        		loginType: "username"
			}
		},
		methods: {
        	toggleLoginType(){
        		if(this.loginType === 'username'){
        			this.loginType = 'email';
				}else {
        			this.loginType = 'username';
				}
			}
		}
    }
</script>

<style scoped>

</style>
