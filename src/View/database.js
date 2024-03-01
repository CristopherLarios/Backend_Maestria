const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/DCPHONE'

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
console.log('Connected to MongoDB Server..');
})
.catch((error)=>{
    console.log('Error Conecting to MongoDB: ',error    );
})