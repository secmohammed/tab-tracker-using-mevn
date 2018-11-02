export const getters = {
    authenticated: state => state.loggedIn,
    user: state => state.user
}
export const actions = {
    register ({ commit }, credentials) {
        return this.$api.user().register(credentials)
    }
}