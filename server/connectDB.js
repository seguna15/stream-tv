import mongoose from "mongoose";


export default async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`${connect.connection.host} DB connected`)
    } catch (error) {
        console.log('Database connection failed.');
        console.log(error)
       
    }
}

