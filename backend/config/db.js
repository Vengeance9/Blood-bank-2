const mongoose= require('mongoose')

const connectdb= async()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected successfully')
    }
    catch{
        console.error('MongoDB connection failed')
        process.exit(1) 
    }
}

module.exports=connectdb