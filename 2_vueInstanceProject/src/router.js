import Vue from 'vue';
import Router from 'vue-router';
import DataRendering from './views/DataRendering.vue';
import VueTemplates from './views/VueTemplates.vue';

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
			name: 'vuetemplates',
			component: VueTemplates,
		},
	],
});
