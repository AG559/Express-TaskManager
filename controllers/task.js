const { Task } = require("../models/task");

const getAllTasks = (req,res)=>{
    res.send('Get All items');
}
const createNewTask =async (req,res)=>{
    const task =await Task.create(req.body);
    res.status(201).json(task);
}
const getSingleTask =(req,res)=>{
    res.send('Get Single Task By Id');
}
const updateTask =(req,res)=>{
    res.send('Update Single Task');
}
const deleteTask =(req,res)=>{
    res.send('Delete Single Task');
}
module.exports={
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask
}