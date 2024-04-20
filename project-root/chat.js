// const mongoose = require ('mongoose')

// mongoose.connect("mongodb://0.0.0.0:27017/Search-project-data")
// .then(()=>{
//     console.log('mongodb connected');
// })   
// .catch(()=>{
//     console.log('error');
// })

// const tutSchema =new mongoose.Schema({
//     name:{
//         type: String,
//         required: true
//     },

//     password:{
//         type: Number,
//         required: true
//     },

//     Gmail:{
//         type: String,
//         required: true
//     },

//     Freelncer:{
//         type: String,
//         required: true
//     },

//     Employer:{
//         type: String,
//         required: true
//     },

// })

// new collection =new mongoose.model('sea',tutSchema)

// const { Server } = require('socket.io');
// const { Project, User } = require('../models');

// const io = new Server();

// io.on('connection', async (socket) => {
//   console.log('User connected:', socket.