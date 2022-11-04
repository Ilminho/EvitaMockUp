const keikat = require('../keikkaJson')
const keikatRouter = require('express').Router()

const keikkaJson = require('../keikkaJson')
const Keikka = require('../mongoose/keikat')

keikatRouter.get("", async (req,res)=>{
    console.log("first")
    const results = await Keikka.find({})
    res.status(200).send(results)
})

keikatRouter.get("/jtnjtn", (req,res)=>{
    let jtn={"isEditable":true,"items":[{"tid":"p491232","rid":null,"pid":491232,"href":"/fi/product/491232/Krups-Espresso-puhdistustabletit","type":"product","name":"Krups Espresso -puhdistustabletit","quantity":1,"unitPrice":1.0,"totalPrice":1.0,"excludingVat":7.98,"excludingVatTotal":7.98,"taxRate":"24","imageHost":"cdn.verkkokauppa.com","imagePath":"/images/75/2_491232-736x800.jpeg","ageLimit":0,"availability":"Heti","bullets":["Krups Espressia espressokeittimiin","10 puhdistustabettia","Puhdistaa tehokkaasti"],"restrictions":{"isRestricted":false,"pickupAllowed":[],"postalCodeAllowed":[],"description":"","descriptionShort":""},"discountName":"","reservedStatusLabel":null,"discount":null,"pickupLocationText":"","pickupAddressText":"","pickupLocationUrl":"","displayIndividualReservationStatus":true,"stocks":{"web":{"main":{"stockWarehouse":"yli 25","state":"immediately","isAvailable":true,"title":"Toimitettavissa verkosta","stockShelf":"","minDays":0,"maxDays":0,"handlingDays":0}},"store":{"hki":{"stockWarehouse":"yli 25","stockShelf":"23","stockTotal":"yli 25","minDays":0,"maxDays":0,"state":"immediately","isAvailable":true,"location":"js","warehouse":"myymala","title":"Helsingin myymälä"},"kioski":{"stockWarehouse":"yli 25","stockShelf":"0","stockTotal":"yli 25","minDays":0,"maxDays":0,"state":"immediately","isAvailable":true,"location":"js","warehouse":"kioski","title":"Helsingin Kioski"},"oul":{"stockWarehouse":false,"stockShelf":"6","stockTotal":"6","minDays":0,"maxDays":0,"state":"immediately","isAvailable":true,"location":"oul","warehouse":"myymala","title":"Oulun myymälä"},"pir":{"stockWarehouse":false,"stockShelf":"11","stockTotal":"11","minDays":0,"maxDays":0,"state":"immediately","isAvailable":true,"location":"pir","warehouse":"myymala","title":"Pirkkalan myymälä"},"rai":{"stockWarehouse":false,"stockShelf":"14","stockTotal":"14","minDays":0,"maxDays":0,"state":"immediately","isAvailable":true,"location":"rai","warehouse":"myymala","title":"Raision myymälä"}},"wh":"js"},"allowRetargeting":true,"serials":[],"references":[],"isThrottled":false,"internalTransfers":[]}],"totalPrice":1.0,"excludingVatTotal":7.98,"totalQuantity":1,"cartString":"OZ65U8hwSTbm","cartUuid":"91d340aa-d089-40f6-8103-5721f8a9fa36","isAuthed":false,"timestamp":1663587548,"modifiedAt":"2022-09-19T14:39:08+03:00"}
    res.send(jtn)
})

keikatRouter.post("/lisaa", async (req,res)=>{
    console.log("Lisääätään")
    var result
    try{
    const newKeikka = new Keikka(req.body)
    result = await newKeikka.save()
        console.log(req.body)

    } catch (e){
        res.status(400).send(e)
        return
    }
    res.status(200).send(result)
})

keikatRouter.delete("",  async (req,res)=>{
    const results = await Keikka.deleteMany({})
    res.status(200).send(results)
})

module.exports=keikatRouter