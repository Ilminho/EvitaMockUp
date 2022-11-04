const router = require("express").Router()
const Tuote = require("../mongoose/tuotteet")
require('express-async-errors')

router.get("", async (req,res)=>{
    const result = await Tuote.find({})
    res.send(result)
})
router.get("/tuotteetReact", async (req,res)=>{
    let result = await Tuote.find({})
    let z = []

    for(let iteraatio of result){
        let tuoteListassa=false;        
        for(let obj of z){

            if(iteraatio.tuote===obj.tuote){
                tuoteListassa=true
                let tyyppiOlemassa = false
                for(let tyyppi of obj.tyyppi){
                    if(tyyppi===iteraatio.tuote)
                        true

                }
                if(!tyyppiOlemassa){
                    obj.tyyppi[obj.tyyppi.length]={tyyppi: iteraatio.tyyppi, hinta:iteraatio.hinta, varastossa: iteraatio.lukumaara}
                }

            }

        }
        if(!tuoteListassa){
            z[z.length] = {id:iteraatio._id, tuote: iteraatio.tuote, kuva: iteraatio.kuva, tyyppi:[{tyyppi: iteraatio.tyyppi, hinta:iteraatio.hinta, varastossa: iteraatio.lukumaara }],kuvaus:iteraatio.kuvaus}
        }        
    }
    result.tuotteet = z
    res.send(result.tuotteet)
})

router.post("", async (req,res)=>{
    const tuoteToAdd = req.body
    if(req.body.tuote ===undefined||
        req.body.hinta===undefined){
            res.sendStatus(400)
            return

    }


    const uusiTuote = new Tuote(tuoteToAdd)

    const result = await uusiTuote.save()

    res.status(200).send(result)



})

router.delete("",  async (req,res)=>{
    const results = await Tuote.deleteMany({})
    res.status(200).send(results)
})

router.get("/:tuote", async (req,res)=>{
    const tuote = req.params.tuote
    const results = await Tuote.find({tuote:tuote})
    res.status(200).send(results)
})

router.get("/ostoskori", async(req,res)=>{
    
})


module.exports = router
