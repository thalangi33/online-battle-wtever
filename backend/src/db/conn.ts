import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

let _db: mongoose.Connection;
const DB = process.env.DB;

const conn = {
  connectToServer: async (callback: Function) => {
    //Set up default mongoose connection
    let mongoDB: any = process.env.MONGODB_URI;
    let options: mongoose.ConnectOptions = {
      dbName: DB,
    };
    try {
      const dbo = await mongoose.connect(mongoDB, options);
      _db = dbo.connection;
      console.log(`Successfully connect to ${DB}`);
    } catch (err: any) {
      callback(err);
    }
  },

  getDb: () => _db,
};

export default conn;
