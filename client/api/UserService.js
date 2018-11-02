export default class UserService {
    constructor (ctx) {
        this.$axios = ctx.$axios
        this.endpoints = { 
            register : 'register'
        }
    }
    register (credentials) {
        return this.$axios.post(this.endpoints.register , credentials)
    }
}