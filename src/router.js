import Vue from 'vue';
import Router from 'vue-router';
import { isLogin } from './utils/auth';
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'start', // 引导页
      component: () => import('./views/start/Start')
    },
    {
      path: '/home',
      name: 'home', //首页
      component: () => import('./views/home/index')
    },
    {
      path: '/search',
      name: 'search', //搜索
      component: () => import('./views/home/Search')
    },
    {
      path: '/personal',
      name: 'personal', //个人中心
      component: () => import('./views/home/Personal'),
      meta: {
        needLogin: true
      }
    },
    {
      path: '/setting',
      name: 'setting', //个人中心-设置
      component: () => import('./views/home/Setting')
    },
    {
      path: '/msg',
      name: 'msg', // 通知
      component: () => import('./views/home/Msg'),
      meta: {
        needLogin: true
      }
    },
    {
      path: '/zhongchou',
      name: 'zhongchou', //首页-众筹
      component: () => import('./views/home/Zhongchou')
    },
    {
      path: '/pinjain',
      name: 'pinjian', //首页-拼件
      component: () => import('./views/home/Pinjian')
    },
    {
      path: '/fangguan',
      name: 'fangguan', //首页-方罐
      component: () => import('./views/home/Fangguan')
    },
    {
      path: '/shiyin',
      name: 'shiyin', //首页-试饮
      component: () => import('./views/home/Shiyin')
    },
    {
      path: '/xinren',
      name: 'xinren', //首页-新人
      component: () => import('./views/home/Xinren')
    },
    {
      path: '/chadan',
      name: 'chadan', //首页-茶单
      component: () => import('./views/home/Chadan')
    },
    {
      path: '/zhuanti',
      name: 'zhuanti', //首页-专题
      component: () => import('./views/home/Zhuanti')
    },
    {
      path: '/shipin',
      name: 'shipin', //首页-视频
      component: () => import('./views/home/Shipin')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/home/Login')
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/market',
      name: 'market', //市集
      component: () => import('./views/market/Market.vue')
    },
    {
      path: '/master',
      name: 'master', //大师
      component: () => import('./views/market/Master.vue')
    },
    {
      path: '/eminence',
      name: 'eminence', //名家
      component: () => import('./views/market/Eminence.vue')
    },
    {
      path: '/star',
      name: 'star', //茗星
      component: () => import('./views/market/TeaStar.vue')
    },
    {
      path: '/compilations',
      name: 'compilations', //合集
      component: () => import('./views/market/Compilations.vue')
    },
    {
      path: '/circle',
      name: 'circle', //圈子
      component: () => import('./views/circle/Circle.vue')
    },
    {
      path: '/ring',
      name: 'ring', //圈子里面的圈子
      component: () => import('./views/circle/Ring.vue')
    },
    {
      path: '/Circledetails',
      name: 'circledetails',//学茶网，问茶答，舌尖上的茶
      component: () => import('./views/circle/Circledetails.vue')
    },
    {
      path:'/post',
      name:'post',
      component:()=>import('./views/circle/Post')
    },
    {
      path: '/article',
      name: 'article', //文章
      component: () => import('./views/article/Article.vue')
    },
    {
      path: '/comments',
      name: 'comments', //茶评
      component: () => import('./views/comments/Comments.vue')
    },
    {
      path: '/detail',
      name: 'Detail',//茶评详情
      component: () => import('./views/comments/Detail.vue')
    },
    {
      path: '/bytype',//茶评检索
      name: 'Bytype',
      component: () => import('./views/comments/Bytype.vue')
    },
    {
      path: '/hotcom',//热门茶评
      name: 'Hotcom',
      component: () => import('./views/comments/Hotcom.vue')
    },

    {
      path: '/weekcom',//每周精评
      name: 'Weekcom',
      component: () => import('./views/comments/Weekcom.vue')
    }, {
      path: '/weekmore',//每周精评更多
      name: 'Weekmore',
      component: () => import('./views/comments/Weekmore.vue')
    },
  ]
});

// 路由拦截 根据token判断是否登录
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogin()) {
      next();
    } else {
      next({
        // name: 'login'
        // show: true
      });
    }
  } else {
    next();
  }
});

export default router;
