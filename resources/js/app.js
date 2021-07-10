require('./bootstrap');

import Vue from 'vue';

import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import store from './store';

Vue.use(ElementUI);

import App from "./pages/App.vue";

import router from './router';

const app = new Vue({

    el: '#app',

    store,

    router,

    render: h => h(App)

});
