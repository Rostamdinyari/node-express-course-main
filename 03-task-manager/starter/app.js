const connectDB = require('./db/connect')
const express = require ('express');
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static('./public'))
app.use(bodyParser.json());
const tasks = require('./routs/tasks')
require('dotenv').config()
const notFound = require('./middleware/not-found')




// This will set the execution policy to bypass for the current PowerShell session only.
//Set-ExecutionPolicy Bypass -Scope Process -Force

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)


// Create a MySQL connection pool
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "Sshirin@1360",
  database: "marketplace",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use('/api/v1/tasks',tasks)
app.use(notFound)

const start = async ()=>{
  try{ 
    await connectDB(process.env.MONGO_URI)
    app.listen(port);
    console.log(`Server is up runing at ${port}`);
    console.log("Thank you!");
  }catch(error){
    console.log(error)
  }
}


start()

