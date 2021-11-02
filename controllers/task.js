const { Task } = require("../models/task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(201).json({ tasks });
    } catch (error) {
        res.status(500).json(error);
    }

}
const createNewTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getSingleTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findOne({ _id: id });
        if (!task) {
            return res.status(404).json({ message: `No Task with ID :${id}` })
        }
        res.status(201).json({ task });
    } catch (error) {
        res.status(400).json(error);
    }
}
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const deleteTask = await Task.findOneAndDelete({ _id: taskID });
        if (!deleteTask) {
            return res.status(404).json({ message: `No task with this ID : ${taskID}` })
        }
        res.status(201).json(deleteTask);
    } catch (error) {
        res.status(500).json(error);
    }

}
const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const newData = req.body;
        const updateTask = await Task.findOneAndUpdate({ _id: id }, newData)
        if (!updateTask) {
            return res.status(404).json({ message: `No Task with this ID : ${id}` });
        }
        res.status(201).json({ updateTask });
    } catch (error) {
        res.status(500).json(error);
    }

}

module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}