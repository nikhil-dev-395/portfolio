const mongoose = require("mongoose")

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected .."+ conn.connection.host);
        return conn;

    } catch (error) {
        console.log("db connection error ", error);

    }
}

module.exports = connectDB;
