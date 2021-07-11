import Http from 'axios'


function initialState() {
    return {
        id: null,
        model: null,
        all: [],
        query: '',
        serverPagination: {
            page: 1,
            rowsNumber: 0,
            descending: false,
            itemsPerPage: 10,
        },
        totalNumber: 0,
        filters: {},
        loading: false,
        modelData: {},
        links: {
            next: null,
            prev: null
        },
        showError: false,
        showSuccess: false,
    }
}

const getters = {
    all: state => state.all,
    loading: state => state.loading,
    serverPagination: state => state.serverPagination,
    filters: state => state.filters,
    query: state => state.query,
    model: state => state.model,
    totalNumber: state => state.totalNumber,
    showError: state => state.showError,
    showSuccess: state => state.showSuccess

};

const actions = {

    fetchPaged({commit, state}) {
        commit("setLoading", true);
        let pagination = state.serverPagination;
        let query = state.query;

        return new Promise((resolve, reject) => {
            Http.get('api/'+
                    state.model +
                    "?page=" +
                    (pagination.page - 1) +
                    "&rowsPerPage=" +
                    pagination.itemsPerPage +
                    "&" +
                    "&query=" +
                    query
                )
                .then(res => {
                    commit("setLoading", false);
                    let response = res.data;

                    if (response.data) {
                        commit("setAll", response.data);
                        commit("setTotalNumber", response.meta.total);
                        commit("setTotalPage", response.meta.last_page);
                    }
                    resolve(res);
                })
                .catch(error => {
                    reject(error);
                })
                .finally(() => {
                    commit("setLoading", false);
                });
        });
    },


    async create({commit, state}) {
        commit('setLoading', true);
        try {
            console.log(state.modelData)
            let response = null;
            if (state.modelData.id) {
                // state.modelData._method = 'PUT';
                response = await Http.put(`api/${state.model}/${state.modelData.id}`, state.modelData)
            } else {
                response = await Http.post(`api/${state.model}`, state.modelData)
            }
            commit('setSuccess', response.data.message);
            commit('setLoading', false);
            return response;
        } catch (e) {
            commit('setLoading', false);
            commit('setError', 'Something went wrong');
            throw e;
        }
    },

    delete({commit, state}, item) {
        commit('setLoading', true);
        return new Promise((resolve, reject) => {
            Http.delete(`api/${state.model}/${item.item}`)
                .then(response => {
                    commit('setSuccess', response.data.message);
                    commit('setLoading', false);
                    resolve(response)
                })
                .catch(error => {
                    commit('setLoading', false);
                    commit('showError', error.response.data.message);
                    reject(error)
                })
        });
    },


    resetState({commit}) {
        commit('resetState')
    }
}

const mutations = {
    setAll(state, items) {
        items = items.map((item, index) => {
            item.s_no = (state.serverPagination.page - 1) * state.serverPagination.itemsPerPage + (index + 1);
            return item;
        });
        state.all = items
    },
    setLoading(state, loading) {
        state.loading = loading
    },

    setModel(state, model) {
        state.model = model
    },
    setServerPagination(state, item) {
        state.serverPagination = item
    },
    setTotalNumber(state, item) {
        state.totalNumber = item
    },
    setQuery(state, query) {
        state.query = query
    },
    setModelData(state, data) {
        state.modelData = data
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    },

    setLinks(state, item) {
        state.links = item;
    },

    setTotalPage(state, item) {
        state.serverPagination.totalPage = item;
    },
    setSuccess(state,successMsg) {
        state.showSuccess = successMsg;
    },
    setError(state,errMsg) {
        state.showError = errMsg;
    },
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
