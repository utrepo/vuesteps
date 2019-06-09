import Vue from 'vue';
import Router from 'vue-router';
import Attributes from './views/Attributes.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'attributes',
			component: Attributes,
		},
	],
});
