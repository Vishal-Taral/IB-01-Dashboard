const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

//database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dashboard',
    port: 3306
})

// check connection

db.connect(err => {
    if (err) { console.log(err); } else {
        console.log("connected")
    }
})

//fetch data from server
//here "rawdata" is the table name which is in databse
app.get('/Rawdata', (req, res) => {
    let qr = ' SELECT * FROM Rawdata';
    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all Rawdata Data",
                data: result
            })
        }
    })
});


//fetch data from server
//here "ppc" is the table name which is in databse
app.get('/Ppc', (req, res) => {
    let qr = ' SELECT * FROM Ppc';
    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all PPC Data",
                data: result
            })
        }
    })
});

//post Data


app.listen(3000, () => {
    console.log("server listen on port 3000")
})