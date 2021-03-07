const mongoose = require('mongoose')

const addStudent = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    enroll: {
        type: Number,
        required: true
    },
    stream: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Students', addStudent)