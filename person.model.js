const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Student = new Schema({
    std_id: {
        type: Number,
        required: true
    },
    std_fullname: {
        type: String,
        required: true
    },
    std_login: {
        type: String,
        required: true
    },
    std_pswd: {
        type: String,
        required: true
    }
})

mongoose.model('students', Student)