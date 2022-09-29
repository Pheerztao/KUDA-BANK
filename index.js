require(`dotenv`).config();
const express = require(`express`)
const app = express()
const mysql = require(`mysql2`); 
const bodyParser = require(`body-parser`)
const port = 4000

app.listen(port, () => {

  console.log(`The server works for kuda-bank: ${port}`)
  
})


app.use(bodyParser.json())

const connection = mysql.createConnection({
      host : process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      port : process.env.DATABASE_PORT,
      password: process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE_NAME
});

connection.connect()



//START OF METHOD

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

app.post(`/customer/new`, (req, res) => {
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
     
     res.status(201).send({
        message : "users created successfully",
          data : newUser
     })

    }

   }) 

 /*app.delete(`/customer/:id`, (req, res) => {

        const userid = req.params.id
 })*/  

// END OFF METHOD


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


//get request doesnt take a body=== u can use a params or a query and the params goes  in a URL


// app.get(`/ramsey`, (req, res) => {
//     message: `hello ramsaey, welcome here`
//     statusCode: 200

//})

app.get(`/profile/:email/:phine/:id`, (req, res) => {

            const usersEmail = req.params.email
            const usersPhone = req.params.phone
            const usersid = req.params.id
            res.send({
              message: "you send the params route",
              data: usersEmail
            })
})