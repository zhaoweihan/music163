import Vue from 'vue';
import Router from 'vue-router';
import iconfont from '../lib/iconfont.css';

//  引入组件
import Musicstart from '../components/Musicstart';
import Bottomnav from '../components/bottomNav';
import Homepage from '../components/home/Homepage';
import Mymusic from '../components/home/Mymusic';
import Myzone from '../components/home/Myzone';
import Friends from '../components/home/Friends';
import Musicinfo from '../components/Musicinfo';
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'musicstart',
      component: Musicstart
    }, {
      path: '/bottomnav',
      name: 'bottomnav',
      component: Bottomnav,
      children: [{
          path: 'homepage',
          component: Homepage
        },
        {
          path: 'mymusic',
          component: Mymusic
        },
		{
          path: 'friends',
          component: Friends
        },
		{
          path: 'myzone',
          component: Myzone
        }
      ]
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
