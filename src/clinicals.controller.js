import dao from "./clinicals.dao"
import mongodb from 'mongodb'

exports.getAll = (req,res) => {
    dao.get({patient: req.params.patientId},(err,clinicals)=>{
        if (err)  console.log(err);
        console.log(req.params.patientId)
        res.send(clinicals);
    })
}

exports.create = (req,res)=>{
    var clinicals = req.body;
    dao.create(clinicals,(err,clinicals)=>{
        if(err) console.log(err);
        res.send(clinicals);
    })
}
