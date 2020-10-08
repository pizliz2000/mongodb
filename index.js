const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/rbd', {
    useMongoClient: true
})
    .then(() => console.log('MongoDB has started'))
    .catch(e => console.log(e))


require('./person.model')
const Student = mongoose.model('students')


Student.find({std_id: 1}).then(students => {
    console.log(JSON.stringify(students, null, 2))


    //DELETE
    // const p = students[0]
    // Student.find({_id: p._id}).remove().then(_=>console.log())

})

//ADD
// const student = new Student({
//     std_id: 1, std_fullname: "Alexandr Gorelkin ", std_login: "pizliz2k", std_pswd: "qwerty1235"
// })
//
//
// student.save()
//     .then(user=>{console.log(user)})
//     .catch(e=>console.log(e))