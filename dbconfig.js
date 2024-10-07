import mongoose, { connect } from "mongoose";
import DB_URL from "./server.js";

export default async function connectdb(){
    try {
      await mongoose.connect(DB_URL);
       console.log(`succesfully connected at ${DB_URL}`)
    } catch (error) {
        console.log(error);
    }
}