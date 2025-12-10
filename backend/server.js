import express from "express";
import cors from "cors";
import "dotenv/config";
import connectionDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";

//APP CONFIG
const app = express();
const port = process.env.PORT || 4000;
connectionDB();
connectCloudinary();

//Middlewares
app.use(express.json());
app.use(cors());

//API ENDPOINT
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("API Working now!!");
});

app.listen(port, () => console.log("server started on port: " + port));
