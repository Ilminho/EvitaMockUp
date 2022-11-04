const mongoose = require('mongoose')

const password = "mooctest" //älä tee tätä!!

const tuotteetSchema = mongoose.Schema({
    tuote: {
        type: String,
        required:true,
        maxLength: [20,"Liian pitkä tuotenimi"]
    
    },
    hinta: {
        type: Number,
        required: true,
        maxLength: [6],
    },

    tyyppi: String,

    kuva: String,
    lukumaara: Number,
    kuvaus: String
})

tuotteetSchema.set("toJson", {
    transfrom: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id.toString(),
        delete returnedObject._id,
        delete returnedObject.__v  
    }
})

const mongoUrl = `mongodb+srv://Ilminho:${password}@cluster0.nfgcz.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(mongoUrl)

const Tuote = mongoose.model('Tuote', tuotteetSchema)

module.exports = Tuote