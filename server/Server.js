const express = require("express");
const multer  = require("multer");
const appRoutes = require("./route/Routes")
const hbs = require("hbs");
const app = express();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/pages/parts");

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/pages'));
 
app.use(multer({storage:storageConfig}).single("file"));
app.use(appRoutes);

app.listen(3000);

