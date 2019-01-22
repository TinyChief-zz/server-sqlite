const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // Register logic
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJSON = user.toJSON()
      await res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account already in use.'
      })
    }
  },
  // Log in logic
  async login (req, res) {
    try {
      const {email, password} = req.body
      // Search for user with the same email as in requist
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      // No account with the same email
      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      // Compare account password againts requisted
      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      // Send information back to client
      const userJSON = user.toJSON()
      await res.send({
        user: userJSON,
        token: jwtSignUser(userJSON)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to login'
      })
    }
  }
}
