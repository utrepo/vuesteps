import Vue from 'vue';
import Router from 'vue-router';
import DataRendering from './views/DataRendering.vue';
import VueSyntax from './views/VueSyntax.vue';
import Methods from './views/Methods.vue';
import Hooks from './views/Hooks.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/datarendering',
			name: 'dataRendering',
			component: DataRendering,
		},
		{
			path: '/',
			name: 'vuesyntax',
			component: VueSyntax,
		},
		{
			path: '/methods',
			name: 'methods',
			component: Methods,
		},
		{
			path: '/hooks',
			name: 'hooks',
			component: Hooks,
		},
	],
});
