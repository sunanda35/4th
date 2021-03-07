const express = require('express');
const router = express.Router();
const AddStudent = require('../model/student')


//to add a students
router.post('/api/student/add', async (req, res)=>{
    const student = new AddStudent({
        name: req.body.name,
        enroll: req.body.enroll,
        stream: req.body.stream
    })

    try{
        const submit = await student.save();
        res.status(200).json(submit)
    }catch(err){
        console.log(err)
        res.json({
            status: 400,
            error: 'Some error occured!'
        })
    }
})


//to update student's credential
router.post('/api/student/update', async (req, res)=>{
    const studentID = req.body.studentID;

    const updateStudent ={
        name: req.body.name,
        enroll: req.body.enroll,
        stream: req.body.stream
    }
    await AddStudent.findByIdAndUpdate(studentID, {$set: updateStudent}).then(()=>{
        res.json({
            status: 200,
            message: "Student updated successfully!"
        })
    }).catch(err=>{
        res.json({
            status: 400,
            message: 'Some error occured!'
        })
    })
})

//to delete students
router.post('/api/student/delete', async (req, res)=>{
    const studentID = req.body.studentID;

    await AddStudent.findByIdAndDelete(studentID).then(()=>{
        res.json({
            status: 200,
            message: 'Student Deleted Successfully!'
        })
    }).catch(err=>{
        res.json({
            status: 400,
            message: 'Some error occured!'
        })
    })
})


//for fetch all students
router.get('/api/students', async (req, res)=>{
    await AddStudent.find().then(data =>{
        res.json({
            status: 200,
            data
        })
    }).catch(err =>{
        res.json({
            status: 400,
            message: 'Some error occured!'
        })
    })
})

module.exports = router;