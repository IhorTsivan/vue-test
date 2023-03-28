import Vue from 'vue';
import Vuex from 'vuex';
import packages from './modules/packages';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        packages,
    },
    strict: debug
})
