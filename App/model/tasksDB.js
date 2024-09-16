module.exports = class TasksDB {
  constructor(arr) {
    this.tasks = [...arr]
  }

  createTask(newTask) {
    this.tasks.push({ ...newTask, id: 20 })
    return this.tasks[this.tasks.length - 1]
  }

  getTasks(page, results) {
    return [...this.tasks.slice((page - 1) * results, page * results)]
  }

  getTaskById(id) {
    const foundIndex = this.tasks.findIndex((t) => t.id === id)
    return foundIndex === -1 ? null : this.tasks[foundIndex]
  }

  updateTask(id, values) {
    const foundTaskIndex = this.tasks.findIndex((t) => t.id === id)
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = {
        ...this.tasks[foundTaskIndex],
        ...values,
      }
    }

    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex]
  }

  deleteTask(id) {
    const foundTaskIndex = this.tasks.findIndex((t) => t.id === id)
    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1)
  }
}
