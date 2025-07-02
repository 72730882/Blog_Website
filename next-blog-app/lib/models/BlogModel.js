import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        tpe:String,
        required:true,

    },
    description:{
        tpe:String,
        required:true,
        
    },
    category:{
        tpe:String,
        required:true,
        
    },
    author:{
        tpe:String,
        required:true,
        
    },
    image:{
        tpe:String,
        required:true,
        
    },
    authorImg:{
        tpe:String,
        required:true,
        
    },
    date:{
        type:Date.now,
        default:Date.now()
    }
})

const BlogModel = mongoose.models.blog || mongoose.model('blog',Schema);

export default BlogModel;