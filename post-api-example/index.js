const bodyParser = require('body-parser');
const express= require('express');
const app = express();
//const mysql=require(`mysql2`);

const PORT= 3000;

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'moulirohit',
//     database: 'workbench_demo_db'
// });

// const name = 'Rohit';
// const age = 20;

// connection.connect((err) => {
//   if (err) {
//       console.error('Error connecting to the database:', err);
//       return;
//   }
//   console.log('Connected to the MySQL database!');
// });

// // Fetch Data Example
// connection.query(
//     'INSERT INTO users (name, age) VALUES (?, ?)',
//     [name, age],
//     (err, results) => {
//         if (err) {
//             console.error('Error inserting data:', err);
//             return;
//         }
//         console.log('Data inserted successfully!', results);
//     });

// // Close the Connection
// connection.end();
 app.use(bodyParser.json());

// app.post('/chintu', (req,res)=>{
//     let naam = 'golu'; 
//     let umar= 12;
//     const{name,age} = req.body;
//     if(age<18){
//         naam=name;
//         umar=age;   
//     }
//     if (!name) {
//         return res.status(404).json({ message: 'User not found' });
//       }
//     console.log(`received name ${name} and age ${age}`);
//     console.log(`rohitlala ${naam} and ${umar}`);
// res.status(200).json({
//     message:'data received successfully',
// receivedData:{naam ,umar},
// })
// })
app.post(`/data`, (req,res)=>{
const{name,age}=req.body;
console.log(`name is ${name} and age is ${age}`);
res.status(200).json(req.body)})




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});