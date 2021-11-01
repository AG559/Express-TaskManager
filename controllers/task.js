const { Task } = require("../models/task");

const getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.status(201).json({ tasks });
}
const createNewTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
}
const getSingleTask = async (req, res) => {
    const id = req.params.id;
    const tasks = await Task.findOne({ _id: id });
    res.status(201).json(tasks);
}
const updateTask = async (req, res) => {
    const id = req.params.id;
    const task = req.body;
    const updateTask = await Task.findOneAndUpdate({ _id: id }, task)
    res.status(201).json(updateTask);
}
const deleteTask = async (req, res) => {
    const { id: taskID } = req.params;
    const deleteTask = await Task.findOneAndDelete({ _id: taskID });
    res.status(201).json(deleteTask);
}
module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}