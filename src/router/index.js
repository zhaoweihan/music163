import Vue from 'vue';
import Router from 'vue-router';
import iconfont from '../lib/iconfont.css';

//  引入组件
import Musicstart from '../components/Musicstart';
// 主页
import Bottomnav from '../components/bottomNav';
import Findmusic from '../components/findmusic/findmusic';
// 首页：个性推荐
import personaRecommen from '../components/findmusic/home/personaRecommen';
// 主页:排行榜
import rank from '../components/findmusic/home/rank';
// 主页:歌单
import songlist from '../components/findmusic/home/songlist';
// 主页:主播电台
import anchorStation from '../components/findmusic/home/anchorStation';

import Mymusic from '../components/findmusic/Mymusic';
import Myzone from '../components/findmusic/Myzone';
import Friends from '../components/findmusic/Friends';
import Musicinfo from '../components/Musicinfo';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [ {
      path: '/',
      name: 'musicstart',
      component: Musicstart
    },
    // 首页
    {
      path: '/bottomnav',
      component: Bottomnav,
      children: [{
          path: '/',
          component: Findmusic,
          children: [{
            path: '/',
            name: 'personaRecommen',
            component: personaRecommen
          }, {
            path: 'rank',
            component: rank
          }, {
            path: 'songlist',
            component: songlist
          }, {
            path: 'anchorStation',
            component: anchorStation
          }],
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
      path: '/musicinfo/:id',
      name: 'musicinfo',
      component: Musicinfo
    }
  ]
});
