const mongoose = require ('mongoose')

mongoose.connect("mongodb://localhost:27017/Search-project-data")
.then(()=>{
    console.log('mongodb connected');
})   
.catch(()=>{
    console.log('eror');
})