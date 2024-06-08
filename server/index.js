const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 5001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '@Coffee1357',
    database: 'passwordmanager',
})

app.post('/addpassword', (req, res) => {
    const {password, title} = req.body

    db.query("INSERT INTO passwords (password, title) VALUES (?,?)", [
        password, 
        title], (err, result) => {
            if(err){
                console.log(err)
            } else {
                res.send("success");
            }
        })
});
app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
});