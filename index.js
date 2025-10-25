// 1. import json server
const JSONServer = require('json-server')

// 2. create  server for running  json file
const  EduSphere = JSONServer.create()

//3. create middleware
const middleware =JSONServer.defaults()

//4.define port to run the server
const PORT =3000 || process.env.PORT

//5. use middleware
EduSphere.use(middleware)

//6. import db.json file
const router =JSONServer.router("db.json")

//7. use router
EduSphere.use(router)

//8 tell server to listen for client request
EduSphere.listen(PORT,()=>{
    console.log(`EduSphere started  at Port Number ${PORT}`);
    
})