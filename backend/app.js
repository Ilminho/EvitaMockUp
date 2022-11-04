const express = require('express')
const keikatRouter = require("./routes/keikatRouter")
const tuoteRouter = require("./routes/tuoteRouter")
const app = express()
const cors = require('cors')
const morgan = require('morgan')

const middlewareForMorgan = (req,res,next)=>{
    console.log(req.method)
    const postMethod = JSON.stringify(req.method)
    console.log(Object)
    console.log(req.method==="POST"&&req.url==="/tuotteet")
    if(req.url==='/tuotteet'&&req.method==="POST"){
        if(Object.keys(req.body).length>6||Object.keys(req.body).length<2){
            return res.status(401).send("Tee jotain muuta")
        }
    }
    console.log("firstIlkka")
    next()
}

const postObjectLength = (req,res,next)=>{

} 

morgan.token("mooc", (req)=>JSON.stringify(req.body))
app.use(morgan(':url :status :method :mooc'))
app.use(express.json())
app.use(middlewareForMorgan)
app.use(cors())





app.use('/keikat',keikatRouter)

app.use("/tuotteet",tuoteRouter)

app.get("/evitaKuva", (req,res)=>{
    res.sendFile("/Users/ilkkaniemelainen/Documents/Evita_kotisivut/evitakotisivut/src/photos/sinkun_kansi.jpg")
})

module.exports = app
