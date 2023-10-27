const http = require('http')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

let corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});


//route
require('./src/routes/auth.routes')(app);
require('./src/routes/user.routes')(app);
require('./src/routes/vehicle.routes')(app);

const server = http.createServer(app)

server.listen(8001, () => {
    console.log("your server is start http://localhost:8001/");
})

const db = require("./src/models");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    initial();
});

function initial() {
    Role.create({
        id: 1,
        name: "user"
    });

    Role.create({
        id: 2,
        name: "moderator"
    });

    Role.create({
        id: 3,
        name: "admin"
    });
}
