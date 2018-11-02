const authController = require('../Controllers/AuthController')
const authPolicy = require('../Policies/AuthPolicy')
module.exports = (app) => {
  app.post('/register', authPolicy.register, authController.register)
}
