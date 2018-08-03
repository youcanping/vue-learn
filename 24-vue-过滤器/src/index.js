import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
Raven
	.config('https://08ea52cc466f485fbb7306efd7e4c665@sentry.io/1254623')
	.addPlugin(RavenVue, Vue)
	.install();
import App from './app.vue';
// import App from './app-2.vue';
// import App from './app-3.vue';
// import App from './app-4.vue';
// import App from './app-5.vue';
// import App from './app-6.vue';
// import App from './app-7.vue';
// import App from './app-8.vue';
// import App from './app-9.vue';
// import App from './app-10.vue';
window.vm = new Vue({
	name: "app",
    el: '#app',
    render: h => {
        return h(App);
    }
});
