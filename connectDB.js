//Import:
const mongoose = require("mongoose");

//Create function to connect to database:
const connectDB = async () => {
    try {
        //set strictQuery to false:
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to Database ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
}

//Export:
module.exports = connectDB;