"use strict"

import express from 'express'
import 'dotenv/config'

/*
import {clubs} from "./xToSort/clubs.js"
import {createSchedule} from "./xToSort/schedule.js"
import {matchCalc} from "./xToSort/matchDay.js"
import {seasonTable} from "./xToSort/table.js"

// console.log(createSchedule(clubs))
// let result = matchCalc(clubs[0], clubs[1])
console.log(seasonTable(clubs))
*/

const server = express()
const PORT = process.env.PORT

server.use(express.json())
server.use((req, res, next) => {
  console.log("");
  console.log("------ SERVER-MW START ------")
  console.log("Req:", req.method, req.url, req.body)
  
  // if res: override res.send method with new func to log the actual response before sending it (can't be arrow func)
  const originalSend = res.send
  res.send = function (body) {
    originalSend.apply(res, arguments) // call original send method with provided arguments
    console.log("Res:", res.statusCode, res.statusMessage, /* body */)
  }
  next()
})

server.listen(PORT, ()=> console.log(`Running on ${PORT}`))