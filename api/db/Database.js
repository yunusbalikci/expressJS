const mongoose = require('mongoose');
let instance = null;
class Database {
    
    constructor(){
        if(!instance){
            this.mongoCollection = null
            instance = this;
        }
        return instance;
    }

    async connect(options){
        try{
            console.log("Connecting to MongoDB")
            let db = await mongoose.connect(options.CONNECTION_STRING);
            this.mongoCollection = db
            console.log("Connected to MongoDB")
        } catch (error){
            console.log("Error connecting to MongoDB")
            console.log(error)
        }
        
    }

}

module.exports = Database;