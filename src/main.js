import Vue from 'vue'
import App from './App'
import router from './router'
import Meta from 'vue-meta'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
Vue.use(Meta);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
