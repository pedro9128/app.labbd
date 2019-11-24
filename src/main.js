import Vue from "vue";
import App from "./App.vue";
import router from '@/routes';
import BootstrapVue from "bootstrap-vue";
import ElementUI from "element-ui";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(BootstrapVue);
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
