const initialState = () => ({
    filterDrawer: false,
    snackbar: {
        timeout: 3000,
        color: '',
        show: false,
        text: ''
    }
});

const getters = {
    snackbar: state => state.snackbar,
    filterDrawer: state => state.filterDrawer
}

const actions = {
    resetState({commit}) {
        commit('resetState')
    }
}

const mutations = {
    setSnackbar(state, snackbar) {
        state.snackbar = snackbar
    },
    showError(state, text) {
        state.snackbar = {
            timeout: 6000,
            color: "red",
            show: true,
            text
        }
    },
    toggleFilterDrawer(state) {
        state.filterDrawer = !state.filterDrawer
    },
    showSuccess(state, text) {
        state.snackbar = {
            timeout: 6000,
            color: "green darken-3",
            show: true,
            text
        }
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    },
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
