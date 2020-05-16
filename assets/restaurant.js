//Create server
//use express and path
const express = require('express');
const path = require('path');
//create port
const PORT = 3000;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// create array for reserved tables and waitlist
var currentTables = [
    {
        name: "John",
        email: "john@thismail.com",
        phone: "555-5555",
        id: "J",
        username: "john123"
    },
    {
        name: "Mike",
        email: "Mike@thismail.com",
        phone: "555-5555",
        id: "M",
        username: "mike123"
    },
    {
        name: "Karen",
        email: "Karen@thismail.com",
        phone: "555-5555",
        id: "K",
        username: "speakToAManager123"
    },
]

var waitList = [

]

//create routes
app.get("/api/tables", function (req, res) {
    return res.json(currentTables);
});

app.get("/api/waitList", function (req, res) {
    return res.json(waitList);
})

//pushes a new customer reservation into the waitlist array
app.post("/api/reservation", function (req, res) {

    var newPatron = req.body;
    if (currentTables.length === 5) {
        waitList.push(newPatron);
    } else {
        currentTables.push(newPatron);
    }

    return res.json(newPatron);
});

//Log that the app is listening to 3000 PORT
app.listen(PORT, function () {
    console.log(`App listening on PORT ${PORT}`);
});