import mongoose from "mongoose";
const URL = 'mongodb+srv://marwan_sef_academy:cwjtoFsG7HaYb2ak@cluster0.tmnifoc.mongodb.net/'
console.log(URL)
const dbConnection = () => {
  mongoose
    .connect(URL, {
      dbName: "Academic",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
export default dbConnection;
