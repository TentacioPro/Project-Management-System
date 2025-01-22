const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

router.post('/', async (req,res) => {
    const task = new Task(req.body);
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.patch('/:id', async (req,res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json ({ message: 'Task not found'});
        console.log(`Updating task ${task._id} status to ${req.body.status}`);
        task.status = req.body.status;
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE /tasks/:id
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Check if the task exists before deletion
      const task = await Task.findById(id);
      if (!task) {
        console.log(`Task with ID ${id} not found`);
        return res.status(404).json({ message: 'Task not found' });
      }
  
      // Delete the task
      await Task.findByIdAndDelete(id);
      console.log(`Task with ID ${id} deleted successfully`);
      res.status(200).json({ message: 'Task deleted successfully', task });
    } catch (error) {
      console.error('Error deleting task:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  

module.exports = router;