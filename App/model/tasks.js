const TasksDB = require('./tasksDB')

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

module.exports = new TasksDB(tasks)
