const { tasks } = require('./../model')

module.exports.createTask = (req, res) => {
  const { body } = req
  const createTask = tasks.createTask(body)
  res.status(201).send(createTask)
}

module.exports.getTaskById = (req, res) => {
  const {
    params: { id },
  } = req

  const foundTask = tasks.getTaskById(id)
  if (!foundTask) {
    return res.status(404).send('Task Not Found')
  }

  res.status(200).send(foundTask)
}

module.exports.updateTaskById = (req, res) => {
  const {
    params: { id },
    body,
	} = req
	
	const updateTask = tasks.updateTask(id, body)

	if (!updateTask) {
		return res.status(404).send('Task Not Found')
	}

	res.status(200).send(updateTask)
}
