import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import methods from './mixins/methods';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

Vue.use(VueToast);
Vue.config.productionTip = false

Vue.mixin({methods});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')