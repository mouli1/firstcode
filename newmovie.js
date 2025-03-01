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


 app.get(`/singlemovies`, (req,res)=>{
    
     const movie= req.query.movie_name;
     const query = `Select * from movie where movie_name='${movie}'`; 
     console.log(`query : ${query} `);
     connection.query(query, (err, results) => {
         if (err) {
             console.error('Error fetching movies:', err);
             res.status(500).json({ error: 'Database error' });
             return;
         } 
         res.json(results);
    });
     });

     app.post(`/createmovies`, (req,res)=>{
    
     const {id,moviename,genre,seg,actors_name}= req.body;
     const query = `insert into movie (idmovie,movie_name,genre,segment,actorsname) 
     values('${id}', '${moviename}', '${genre}', '${seg}', '${actors_name}')`; 
     console.log(`query : ${query} `);
     connection.query(query, (err, results) => {
         if (err) {
             console.error('Error fetching movies:', err);
             res.status(500).json({ error: 'Database error' });
             return;
         } 
         res.json(results);
    });
     })

    app.delete(`/deletemovies`, (req,res)=>{
    
        const movie= req.query.movie_name;
        const query = `Delete from movie where movie_name='${movie}'`; 
        console.log(`query : ${query} `);
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching movies:', err);
                res.status(500).json({ error: 'Database error' });
                return;
            } 
            res.json(results);
        });
        });

        app.put(`/updatemovies`, (req,res)=>{
            const id= req.query.movie_id;
            console.log(`query----- : ${JSON.stringify(req.query)} `);
            const movie= req.query.movie_name;
            const query = `Update movie SET movie_name='${movie}' where idmovie = '${id}'`; 
            console.log(`query : ${query} `);
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('Error updating movies:', err);
                    res.status(500).json({ error: 'Database error' });
                    return;
                } 
                res.json(results);
            });
            });
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});