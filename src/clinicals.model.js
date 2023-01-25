import mongoose, { Schema } from 'mongoose';

var clinicalsSchema = new Schema({
    componentName:String,
    componentValue:String,
    patient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Patient'
    }
});
module.exports=  clinicalsSchema