const AuthenticationController = require('./controllers/AuthenticationController')
const UserController = require('./controllers/UserController')
const TaskController = require('./controllers/TaskController')

const AuthenticationControllerPolicy = require('./polices/AuthenticationControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post('/login',
    AuthenticationController.login
  )

  app.get('/users', UserController.loadAll)

  app.post('/update', UserController.updateTasksForUser)

  app.post('/create', TaskController.newTask)

  app.get('/tasks', TaskController.getAllTasks)

  app.post('/usertasks', TaskController.getUserTasks)
}
