import { model } from 'mongoose';
import clinicalsSchema from './clinicals.model';

clinicalsSchema.statics = {
    get: function(query,cb){
        this.find(query,cb);
    },
    create: function(data,cb){ 
        var clinicals = new this(data);
        clinicals.save(cb);
    }
    
}

var clinicalsModel =  model("Clinicals", clinicalsSchema,'clinicals') 
module.exports=  clinicalsModel