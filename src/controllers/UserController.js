const {User} = require('../models')

module.exports = {
  async loadAll (req, res) {
    try {
      const users = await User.findAll({ limit: 10 })
      await res.send(users)
    } catch (err) {
      res.status(400).send({
        error: 'Error has accuired'
      })
    }
  },
  async updateTasksForUser (req, res) {
    try {
      const {email, newTasks} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      user.tasks = newTasks
      user.save()
      await res.send(user)
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  }
}
