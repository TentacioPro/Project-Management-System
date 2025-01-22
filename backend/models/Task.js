const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['Pending', 'InProgress', 'Completed'], default: 'Pending'},
    createdAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Task', taskSchema);