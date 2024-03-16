// 1. import json-server 
const jsonServer = require('json-server');

// 2.create a server application 
const restServer = jsonServer.create()

// 3.setup path for debugger.json 
const router = jsonServer.router('db.json')

// 4.return a middilware instance used by json-server 
const middilware =jsonServer.defaults()

// 5.setup port for db.json 
const port = 3001

// 6.use in server 
restServer.use(middilware)
restServer.use(router)

// 7.to run the server(restServer) 
restServer.listen(port,()=>{
    console.log("rest server listening on port" +port);
})