import mongoose from "mongoose";
import props from "./properties"

module.exports= function (){
    mongoose.set('strictQuery', false)
    mongoose.connect(props.DB).then(()=>console.log('DB connected!')).catch(err=> console.log(err))
}