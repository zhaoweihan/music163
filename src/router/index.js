import Vue from 'vue';
import Router from 'vue-router';
import iconfont from '../lib/iconfont.css';

//  引入组件
import Musicstart from '../components/Musicstart';
import Homepage from '../components/Homepage';
import Mymusic from '../components/Mymusic';
import Myzone from '../components/Myzone';
import Musicinfo from '../components/Musicinfo';
import Friends from '../components/Friends';
Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			name: 'musicstart',
			component:Musicstart
		},
		{
			path: '/homepage',
			name: 'homepage',
			component: Homepage
		},
		{
			path: '/mymusic',
			name: 'mymusic',
			component: Mymusic
		},
		{
			path: '/friends',
			name: 'friends',
			component: Friends
		},
		{
			path: '/myzone',
			name: 'myzone',
			component: Myzone
		},
		{
			path: '/musicinfo/:id',
			name: 'musicinfo',
			component: Musicinfo
		}
	]
});