import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/uikit.min.css');
require('./assets/app.css');
require('./assets/uikit.min.js');
require('./assets/uikit-icons.min.js');


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
