const express = require(`express`);
const mysql = require(`mysql2`);
const app = express();
const PORT = 3000;

app.use(express.json());

const connection=mysql.createConnection({

    host : `localhost`,
    user : `root`,
    password : 'moulirohit',
    database : `workbench_demo_db`
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('✅ Connected to MySQL database!');
});

app.get(`/movies`, (req,res) => {
    const query = 'SELECT * from movie';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching movies:', err);
            res.status(500).json({ error: 'Database error' });
            return;
        } 
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});