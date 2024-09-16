const express = require('express')
const {
  createTask,
  getTaskById,
  updateTaskById,
  getTasks,
  deleteTaskById,
} = require('./controllers/taskController')
const { validate, errorHandler } = require('./middleware')

const app = express().use(express.json())

app.get('/tasks', getTasks)
app.post('/tasks', validate.validateTaskOnCreate, createTask)
app.get('/tasks/:id', getTaskById)
app.patch('/tasks/:id', validate.validateTaskOnUpdate, updateTaskById)
app.delete('/tasks/:id', deleteTaskById)

app.use(errorHandler.validationErrorHandler, errorHandler.errorHandler)

module.exports = app
