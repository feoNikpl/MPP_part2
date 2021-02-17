const path = require('path');
const database = require("../database/database");
const Journey = require("../models/journeys.js");

exports.addJourney = async function(request, response) {
    if(!request.body) return response.sendStatus(400);
    let filedata = request.file;
    const journey = new Journey(request.body.name, request.body.destination, request.body.date, (filedata === undefined) ? '' : filedata.filename);
    database.query(journey.addJourney(), function (error, result){
        if(error) return console.log(error.message)
        response.redirect("/content");
    });
};

exports.showContent = async function(request, response) {
    database.query(Journey.getAllJourneys(),function(error, result) {
        if(error) return console.log(error.message);
        response.render(path.join(__dirname, "../pages/content.hbs"), {
            journeys: result
        });
    });
};

exports.deleteJourney = async function(request, response){         
    const id = request.params.id;
    database.query(Journey.deleteJourney(id), function(error, result) {
      if(error) return console.log(error);
      response.redirect("/content");
    });
};

exports.updateJourney = async function(request, response){         
    const id = request.params.id;
    var pass = request.params.pass;
    if (pass == 0){
        pass = 1
    }else{
        pass = 0
    }
    database.query(Journey.updateJourney(id, pass), function(error, result) {
        if(error) return console.log(error);
        response.redirect("/content");
    });

};

exports.sendFile = async function(request, response){
    const file = request.params.filename;
    response.download("./uploads/" + file);
};

exports.showIndex = async function(request, response) {
    response.render(path.join(__dirname, "../pages/index.hbs"));
};