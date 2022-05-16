
const express = require("express");

const cors = require('cors')

const app = express();
const connectDB = require('./db/connect')
const bodyParser = require('body-parser')
const authenticateUser = require('./middleware/authentication')

require('dotenv').config();


app.use(express.json());
app.use(cors())
const tangoController = require("./controllers/tango");
const csardasController = require("./controllers/csardas");
const waltzController = require("./controllers/waltz");
const rockController = require("./controllers/rock");
const szerbController = require("./controllers/szerb");
const otherController = require("./controllers/other");
const authController = require("./controllers/auth");






app.use(express.static(__dirname + "/public"));

app.post("/login", authController.login);

app.post("/logout", authenticateUser, authController.logout);

app.get("/csardas", authenticateUser, csardasController.getCsardas);

app.post("/csardas", authenticateUser, csardasController.postCsardas);

app.get("/csardas/:id", authenticateUser, csardasController.showCsardas);

app.delete("/csardas/:id",authenticateUser, csardasController.deleteCsardas);


app.get("/tango", authenticateUser, tangoController.getTango);

app.get("/tango/:id", authenticateUser, tangoController.showTango);

app.post("/tango", authenticateUser, tangoController.postTango);

app.delete("/tango/:id",authenticateUser, tangoController.deleteTango);




app.get("/waltz",authenticateUser, waltzController.getWaltz);

app.post("/waltz",authenticateUser, waltzController.postWaltz)

app.get("/waltz/:id",authenticateUser, waltzController.showWaltz);

app.delete("/waltz/:id",authenticateUser, waltzController.deleteWaltz);


app.get("/rock",authenticateUser, rockController.getRock);

app.post("/rock",authenticateUser, rockController.postRock);

app.get("/rock/:id",authenticateUser, rockController.showRock);

app.delete("/rock/:id",authenticateUser, rockController.deleteRock);


app.get("/szerb",authenticateUser, szerbController.getSzerb);

app.post("/szerb",authenticateUser, szerbController.postSzerb);

app.get("/szerb/:id",authenticateUser, szerbController.showSzerb);

app.delete("/szerb/:id",authenticateUser, szerbController.deleteSzerb);


app.get("/other", authenticateUser, otherController.getOther);

app.post("/other", authenticateUser, otherController.postOther);

app.get("/other/:id", authenticateUser, otherController.showOther);

app.delete("/other/:id", authenticateUser, otherController.deleteOther);

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT || 2000,"0.0.0.0", () => {
      console.log("server started...");
    });
  } catch (err) {
    console.log(err)
  }
}

start()


