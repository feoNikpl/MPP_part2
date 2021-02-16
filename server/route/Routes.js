const express = require('express');
const bodyParser = require("body-parser");
const controller = require("../controllers/controller");

const urlencodedParser = bodyParser.urlencoded({extended: true});
const router = express.Router();

router.get('/', controller.showIndex);

router.post('/create', urlencodedParser, controller.addJourney);

router.get('/content', controller.showContent);

router.post('/delete/:id', controller.deleteJourney);

router.post('/update/:id/:pass', controller.updateJourney);

router.get('/download/:filename', controller.sendFile);

module.exports = router;
