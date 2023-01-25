import patientController from './patient.controller.js'
import clinicalsController from './clinicals.controller'

module.exports=(router)=>{
    router.get('/patients',patientController.getAll)
    router.get('/patients/:id',patientController.getBy_id)
    router.post('/patients',patientController.create)
    router.put('/patients/:id',patientController.update)
    router.delete('/patients/:id',patientController.delete)

    router.get('/clinicals/:patientId',clinicalsController.getAll)
    router.post('/clinicals',clinicalsController.create)
}