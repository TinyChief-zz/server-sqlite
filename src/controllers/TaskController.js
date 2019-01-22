const {Task} = require('../models')

module.exports = {
  async getUserTasks (req, res) {
    try {
      const email = req.body.email
      const tasks = await Task.findAll({
        where: {
          user_email: email
        }
      })
      await res.send(tasks)
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },
  async getAllTasks (req, res) {
    try {
      const tasks = await Task.findAll({ limit: 100 })
      await res.send(tasks)
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  },
  async newTask (req, res) {
    try {
      // console.log(req.body)
      const task = await Task.create(req.body)
      console.log(task)
      const taskJSON = task.toJSON()
      await res.send({
        task: taskJSON
      })
    } catch (err) {
      res.status(400).send({
        error: err
      })
    }
  }
}
