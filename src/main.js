import Vue from 'vue'
import App from './App.vue'
import Vuetify from "vuetify";

import router from './router/index.js'
import vuetify from './plugins/vuetify';
import vmodal from 'vue-js-modal'
Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(vmodal);
new Vue({
  vuetify,
  router,
  components: {
    App
  },
  render: h => h(App)
}).$mount('#app')
