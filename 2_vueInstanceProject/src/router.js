import Vue from 'vue';
import Router from 'vue-router';
import DataRendering from './views/DataRendering.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'dataRendering',
			component: DataRendering,
		},
	],
});
