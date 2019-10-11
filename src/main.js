import Vue from 'vue';
import Vant from 'vant';
import App from './App.vue';
import { Lazyload } from 'vant';

import 'vant/lib/index.css';
import './assets/css/base.css';
import router from './router';
import 'lib-flexible/flexible'; //页面自适应
import 'vue2-toast/lib/toast.css';
import Toast from 'vue2-toast'; // 信息提示

Vue.use(Toast);

Vue.use(Vant);
Vue.use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
