import Vue from 'vue'
import App from './App.vue'

import {Tab, Tabs, Cell, CellGroup,Image as VanImage } from 'vant';

Vue.config.productionTip = false
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);

new Vue({
  render: h => h(App),
}).$mount('#app')
