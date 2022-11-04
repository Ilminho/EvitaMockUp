const http = require('http')
const app = require('./app.js')
const server = http.createServer(app)

const PORT = 3005

server.listen(PORT, ()=>{
    console.log("Listening port" , PORT)
})



