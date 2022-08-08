import { createRouter, createWebHistory } from 'vue-router';
//import HelloWorld from './components/HelloWorld.vue'
import Home from './views/MainLanding.vue';
import Work from './views/MainWorks.vue';
import Skills from './views/MainSkills.vue';
import contact from './views/MainContact.vue';
import notfound from './views/MainErrorPage.vue';
import ngl from './views/MainNGL.vue';

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'homepg',
			component: Home,
			props: true
		},
		{
			path: '/work',
			name: 'work',
			component: Work,
			props: true
		},
		{
			path: '/skills',
			name: 'skills',
			component: Skills,
			props: true
		},
		{
			path: '/contact',
			name: 'contact',
			component: contact,
			props: true
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'notfound',
			component: notfound,
			props: true
		}
	]
});
