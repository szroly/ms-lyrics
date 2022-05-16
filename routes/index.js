const express = require("express");

const router = express.Router();

const csardasController = require("../controllers/csardas");
const waltzController = require("../controllers/waltz");
const rockController = require("../controllers/rock");
const SzerbController = require("../controllers/szerb");
const otherController = require("../controllers/other");
const tangoController = require("../controllers/tango");


router.get("/csardas", csardasController.getCsardas);


router.get("/tango/:id", tangoController.showTango);

router.get("/tango", tangoController.getTango);


router.post("/tango", tangoController.postTango);


router.get("/waltz", waltzController.getWaltz);

router.get("/rock", rockController.getRock);

router.get("/szerb", SzerbController.getSzerb);

router.get("/other", otherController.getOther);



module.exports = router;
