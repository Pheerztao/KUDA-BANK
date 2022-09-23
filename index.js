const express = require(`express`)
const app = express()
const bodyParser = require(`body-parser`)
const port = 4000

app.use(bodyParser.json())

app.listen(port, () => {

  console.log(`The server works for kuda-bank: ${port}`)
  
})


const users = [
  {
    id : 1,
    fn : "lily",
    sn : "sam",
    occ : "jobless",
    age : 13
  },
  {
    id : 2,
    fn : "georde",
    sn : "cool",
    occ : "doctor",
    age : 66
  },
  {
    id : 3,
    fn : "izzy",
    sn : "day",
    occ : "tiktoker",
    age : 18
  }

]

app.get(`/customers`, (req, res) => {
  res.status(400).send({
      messages : `fill the requirements`,
      data : users
  })
 })


  


app.post(`/customer`, (req, res) => {
     const id = users.lenght + 1
     const fn = req.body.fn
     const sn = req.body.sn
     const occ = req.body.occ
     const age = req.body.age
     
   if(!fn || !sn || !occ || !age){
      res.status(400).send({
      message : `please fill the fields`
      })   
   } else{
      const newUser = {
         id : id,
        fn : fn,
        sn : sn,
        occ : occ,
        age :  age
      }
      
      users.push(newUser)
     
     console.log(`data : ${fn} ${sn} ${occ} ${age}`)
     res.status(201).send({
        message : "users created successfully",
          data : newUser
     })

    }

   })
    




app.post(`/customer`, (req, res) => {
 const data = req.body 
 console.log(data)
 if(!data.fn || !data.sn || !data.email){
   res.status(400).send({
     message: "All fields are required"
})
 
}else{
 res.status(201).send({
   message: `User information accepted, Welcome User ${data.sn}, ${data.fn}, ${data.email}`
})

}

})
