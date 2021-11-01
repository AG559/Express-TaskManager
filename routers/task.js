const express = require('express');
const { getAllTasks,createNewTask,updateTask,deleteTask, getSingleTask } = require('../controllers/task');
const router = express.Router();
router.get('/',getAllTasks);
router.post('/',createNewTask);
router.get('/:id',getSingleTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);

module.exports = router;