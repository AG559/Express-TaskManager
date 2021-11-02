const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Requried name Field"],
            trim: true,
            maxlength: [20, "Task Name can't be more than 20 characters"]
        },
        'completed': {
            type: Boolean,
            default: false
        }
    }
)

module.exports.Task = mongoose.model('task', taskSchema);