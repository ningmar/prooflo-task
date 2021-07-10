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
            itemsPerPage: 25,
        },
        totalNumber: 0,
        filters: {},
        loading: false,
        modelData: {},
        links: {
            next: null,
            prev: null
        }
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

};

const actions = {
    async getAll({commit, state}) {
        commit('setLoading', true);
        let pagination = state.serverPagination;
        let serverParams = {
            paginate: true,
            page: pagination.page,
            rowsPerPage: pagination.itemsPerPage,
            query: state.query,
            sortBy: pagination.sortBy ? pagination.sortBy[0] : null,
            descending: pagination.sortDesc ? pagination.sortDesc[0] : null,
            with_role: true
        };
        serverParams = {...serverParams, ...state.filters};
        Http.get(`/${state.model}`, {
            params: serverParams
        }).then(response => {
            commit('setAll', response.data.data);
            commit('setTotalNumber', response.data.meta.total);
            commit('setLinks', response.data.links)
        }).finally(() => {
            commit('setLoading', false)
        })
    },

    show({commit, state}) {
        commit('setLoading', true);
        return new Promise((resolve, reject) => {
            Http.get( `/${state.model}/${state.id}`)
                .then(response => {
                    commit('setLoading', false);
                    resolve(response)
                })
                .catch(error => {
                    commit('setLoading', false);
                    reject(error)
                })

        })
    },

    async create({commit, state}) {
        commit('setLoading', true);
        try {
            // console.log(state.modelData)
            let response = null;
            if (state.modelData.id) {
                // state.modelData._method = 'PUT';
                response = await Http.put(`/${state.model}/${state.modelData.id}`, state.modelData)
            } else {
                response = await Http.post(`/${state.model}`, state.modelData)
            }
            commit('setLoading', false);
            return response;
        } catch (e) {
            commit('setLoading', false);
            throw error
        }
    },

    delete({commit, state}, item) {
        commit('setLoading', true);
        return new Promise((resolve, reject) => {
            Http.delete(`/${state.model}/${item}`)
                .then(response => {
                    commit('setLoading', false);
                    resolve(response)
                })
                .catch(error => {
                    commit('setLoading', false)
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
    setId(state, id) {
        state.id = id
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
    setFilters(state, item) {
        state.filters = item
    },

    setLinks(state, item) {
        state.links = item;
    },
};

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
