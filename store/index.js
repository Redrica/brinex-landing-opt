const setField = (state, { field, value }) => {
    if (!field) {
        return;
    }

    state[field] = value;
};

const state = () => ({
    scrollLimit: 0,
});

const getters = {

};

const actions = {
    setScrollLimit({ commit }, value) {
        commit('setField', { field: 'scrollLimit', value });
    },
};

const mutations = {
    setField,
};

export default {
    state,
    getters,
    actions,
    mutations,
}
