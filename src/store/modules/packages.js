import {get} from "@/api";
import {npmPackages} from "@/api/constants";

const state = {
    data: [],
    loading: false
};

const getters = {
    getData: (state) => {
        return state.data;
    },
    isLoading: (state) => {
        return state.loading;
    }
};

const actions = {
    fetch: async ({commit}, name) => {
        const {data} = await get(npmPackages + name);
        commit('fetchPackage', data);
        return data;
    },
};


const mutations = {
    fetchPackage(state, data) {
        state.data = data.versions.map(item => {
            return {
                ...item,
                type: data.type,
                name: data.name,
            }
        })
    },
    setLoading(state, loading) {
        state.loading = loading;
    }
};

export default {
    namespaced: true,
    strict: true,
    state,
    getters,
    actions,
    mutations
}
