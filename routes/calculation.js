const express  = require('express')
const router = express.Router();
const Calculation = require('../Schema/Calculation')

// Get all Calculations
router.get('/fetch', async(req, res)=>{
    let calc = await Calculation.find(Calculation.user).select();
    res.send(calc)
})

// Add calculation
router.post('/add', (req, res)=>{
    let calc  = Calculation(req.body)
    calc.save();
    res.send(req.body)
})

// Delete The Calculation
router.delete('/delete/:id', async(req, res)=>{
    let calc = await Calculation.find(Calculation.user).select();
    calc.map(async(e)=>{
        if(e._id == req.params.id){
            data = await Calculation.findByIdAndDelete(req.params.id)
            res.send('Succes')
        }
    })

})
module.exports = router;