const state = {
    token:null
}

const mutations = {
    setToken(state,data){
        state.token = data
    },
    clearToken(state){
        state.token = null
    }
}

const actions = {

}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}