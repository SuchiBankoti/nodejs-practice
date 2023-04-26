const Tasks = [];

const getAllTasks = (req, res) => {
  res.end(JSON.stringify(Tasks));
};
const getSingleTask = (req, res, id) => {
  const t = Tasks.find((task) => task.id === id);
  res.end(JSON.stringify(t));
};
const createTask = (req, res) => {};
const updateTask = (req, res, id) => {};
const deleteTask = (id) => {};
module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
