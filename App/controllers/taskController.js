const tasks = [
  {
    id: '1',
    title: 'Complete JavaScript tutorial',
    body: 'Finish the JavaScript course on Codecademy.',
    isDone: false,
  },
  {
    id: '2',
    title: 'Submit project report',
    body: 'Prepare and submit the final report for the project.',
    isDone: false,
  },
  {
    id: '3',
    title: 'Attend team meeting',
    body: 'Participate in the weekly team meeting to discuss progress and next steps.',
    isDone: false,
  },
  {
    id: '4',
    title: 'Review pull requests',
    body: 'Review and merge pull requests from team members.',
    isDone: false,
  },
]

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks)
}

module.exports.createTask = ({ body }, res) => {
  tasks.push({ id: String(tasks.length + 1), ...body })
  res.status(201).send(tasks[tasks.length - 1])
}

module.exports.getTaskById = ({ params: { id } }, res) => {
  const foundTask = tasks.find((t) => t.id === id)

  if (!foundTask) {
    return res.status(404).send('Task nod found')
  }
  res.status(200).send(foundTask)
}

module.exports.updateTaskById = ({ body, params: { id } }, res) => {
  const foundTask = tasks.findIndex((t) => t.id === id)
  if (foundTask === -1) {
    return res.status(404).send('Task non found')
  }
  tasks[foundTask] = { ...tasks[foundTask], ...body }
  res.status(200).send(tasks[foundTask])
}

module.exports.deleteTaskById = ({ params: { id } }, res) => {
  const foundTask = tasks.findIndex((t) => t.id === id)
  if (foundTask === -1) {
    return res.status(404).send('Task not found')
  }

  tasks.splice(foundTask, 1)
  res.status(204).end()
}
