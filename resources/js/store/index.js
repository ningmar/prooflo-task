import Vue from 'vue';
import Vuex from 'vuex';

import CommonList from './modules/common';
import Notification from './modules/notification';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        CommonList,
        Notification,
    }
});

export default store;
