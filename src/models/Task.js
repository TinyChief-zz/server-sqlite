module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    colors: DataTypes.STRING,
    notifications: DataTypes.STRING,
    people: DataTypes.STRING,
    type: DataTypes.STRING,
    task_id: DataTypes.STRING
    // user_email: DataTypes.STRING
  })

  return Task
}
