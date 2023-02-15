import http from 'node:http'
import { Database } from './database.js'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'





const server=http.createServer(async(req,res)=>{
  const{method, url}=req

 await json(req,res)

 const route = routes.find(route=>{
  return route.method === method && route.path === url
 })

 console.log(method)
 console.log(route.method)

 if(route){
  return route.handler(req,res)
 }
  
   return res.writeHead(404).end("erro2")
})


server.listen(3333)