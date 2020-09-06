import Vue from 'vue';
import AOS from 'aos';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/assets/css/main.scss';
import 'aos/dist/aos.css';

AOS.init();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
