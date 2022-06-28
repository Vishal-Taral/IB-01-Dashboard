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
//here "ppc" is the table name which is in databse
app.get('/Ppc/:P_id', (req, res) => {
    let uid = req.params.P_id;
    let qr = `SELECT * FROM Ppc where P_id=${uid}`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all PPC Data",
                data: result
            })
        }
    })
});


app.get('/Ppc', (req, res) => {
    // let uid = req.params.P_id;
    let qr = `SELECT * FROM Ppc`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all PPC Data",
                data: result
            })
        }
    })
});

//fetch data from server
//here "internship" is the table name which is in databse
app.get('/internship', (req, res) => {
    let qr = ' SELECT * FROM internship';
    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all Internship Data",
                data: result
            })
        }
    })
});





//fetch data from server
//here "rawdata" is the table name which is in databse
app.get('/Rawdata/:id', (req, res) => {
    let id = req.params.id;
    let qr = `SELECT * FROM Rawdata where id=${id}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err) } else if (result.length > 0) {
            res.send({
                massage: "all Rawdata Data",
                data: result
            })
        }
    })
});
//post Data


app.listen(3000, () => {
    console.log("server listen on port 3000")
})