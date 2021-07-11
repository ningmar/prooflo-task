import Vue from 'vue';
import Vuex from 'vuex';

import CommonList from './modules/common';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        CommonList,
    }
});

export default store;
