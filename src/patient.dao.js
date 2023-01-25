import { model } from 'mongoose';
import patientSchema from './patient.model';

patientSchema.statics = {
    get: function(query,cb){
        this.find(query,cb);
    },
    create: function(data,cb){ 
        var patient = new this(data);
        patient.save(cb);
    },
    update: function (query,updateData,cb){
        this.findByIdAndUpdate(query,{$set:updateData},cb);
    },
    delete: function(query,cb){
        this.findByIdAndDelete(query,cb)
    }
    
}

var patientModel =  model("Patient", patientSchema,'patient') // so it won;t be plorals
export default patientModel