const { User } = require('../Models')
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (e) {
      res.status(422).send({
        error: 'This email account is already in use.'
      })
    }
  }
}
