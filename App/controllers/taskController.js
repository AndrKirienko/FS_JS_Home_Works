const { tasks } = require('./../model')

module.exports.createTask = (req, res) => {
	const { body } = req
	const createTask = tasks.createTask(body)
	res.status(201).send(createTask)
}
