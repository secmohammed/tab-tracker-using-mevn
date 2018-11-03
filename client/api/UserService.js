export default class UserService {
    constructor (ctx) {
        this.$axios = ctx.$axios
        this.endpoints = { 
            register : 'register',
            login: 'login'
        }
    }
    register (credentials) {
        return this.$axios.$post(this.endpoints.register , credentials)
    }
    login (credentials) {
        return this.$axios.$post(this.endpoints.login,credentials)
    }
}