import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://fayo:1234@cluster0.nu9zv8l.mongodb.net/blog-app')
}