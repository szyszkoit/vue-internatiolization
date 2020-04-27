import Vue from 'vue';
import App from './App.vue';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css'
import '@progress/kendo-ui/js/messages/kendo.messages.es-ES.js'

import { GridInstaller } from '@progress/kendo-grid-vue-wrapper'


 Vue.use(GridInstaller);
 Vue.use(FlagIcon);
Vue.config.productionTip = false;

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app');