const mongoose = require('mongoose')

const password = "mooctest" //älä tee tätä!!

const keikatSchema = mongoose.Schema({
    paikka: String,
    pvm: {
        type: String,
        required: true,
        maxLength: [12, "try something else"]
    },
    linkki: String
})

keikatSchema.set("toJson", {
    transfrom: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString(),
        delete returnedObject._id,
        delete returnedObject.__v  
    }
})

const mongoUrl = `mongodb+srv://Ilminho:${password}@cluster0.nfgcz.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoUrl)

const Keikka = mongoose.model('Keikka', keikatSchema)

module.exports = Keikka