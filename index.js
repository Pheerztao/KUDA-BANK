const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)
const port = 4000

app.use(bodyParser.json())

app.listen(port, () => {

  console.log(`The server works for alora : ${port}`)
  
})

app.post(`/kuda-bank`, (req, res) => {
 const data = req.body 
 console.log(data)
 if(data.fn == "" || data.sn == "" || data.email == ""  /* or !data.fn || !data.sn etc*/){
   res.send({
     message: "All fields are required"
})
 
}else{
 res.send({
   message: `User information accepted, Welcome User ${data.sn}, ${data.fn}, ${data.email}`
})
}

})