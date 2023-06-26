import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import {todoRouter} from "./routes/todo.js";
import { userRouter } from "./routes/user.js";

const app = express();

//middlewares

app.use(cors());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const port = process.env.PORT || 5001;

//routes
app.use("/todo",todoRouter)
app.use("/user",userRouter)

//database connection
 
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(port, () => console.log(`server is running on port: ${port}`))
  )
  .catch((err) => console.log(`failed to connect due to this error: ${err}`));
