import mongoose from "mongoose";

const connected = {};

const url = process.env.DB?.replace("<password>", process.env.DB_PASS);
// console.log(url);

export const connectDb = async function () {
  if (connected.connection) {
    console.log("already connected");
    return;
  }
  try {
    const db = await mongoose.connect(url, {
      dbName: "OsesFood",
      serverSelectionTimeoutMS: 2000,
    });
    connected.connection = db.connections[0];
    // console.log(db);
    // console.log(connected.connection);
  } catch (err) {
    // console.log(err);
    throw err;
  }
};
