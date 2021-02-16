
module.exports= class Journey{
 
    constructor(name, destination, date, fileName){
        this.name = name;
        this.destination = destination;
        this.date = date;
        this.fileName =fileName;
    }
    addJourney() {
        return `INSERT INTO journeys(name, destination, date, filename) \
                     VALUES('${this.name}','${this.destination}', '${this.date}', '${this.fileName}')`;
    }
  
    static deleteJourney(id){
        return`DELETE FROM journeys WHERE id='${id}'`;
    }
    static updateJourney(id,pass) {
        return `UPDATE journeys SET pass = '${pass}' WHERE id = ${id}`;
    }

    static getAllJourneys() {
        return `SELECT *, DATE_FORMAT(date, '%Y.%m.%d') AS niceDate FROM journeys`;
    }
    
    
}