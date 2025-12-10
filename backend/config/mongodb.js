import mongoose from "mongoose";

// const connectionDB = async () => {
//   mongoose.connection.on("connected", () => {
//     console.log("DB Connected");
//   });
//   await mongoose.connect(`${process.env.MONGODB_URI}/Clothes`);
// };

// import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "Clothes", // ✅ Correct way to set database name
    });

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB Connected to 'Clothes' database");
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectionDB;
