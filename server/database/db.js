import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@todo-app.bqe3iic.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.set("strictQuery", false);

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("success")
        }
    });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', (error) => {
        console.log('Error while connecting with the database ', error.message);
    });
}

export default Connection;