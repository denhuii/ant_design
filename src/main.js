import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Layout, Icon, Menu, Form, Input } from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
