const mongoose = require('mongoose');
const taskSchema = mongoose.Schema(
    {
        'name': {
            type: String,
            require: true,
            trim: true
        },
        'complete':{
            type:Boolean,
            default:false
        }
    }
)

module.exports.Task = mongoose.model('task', taskSchema);