//user vpf2025
//Password St4HbwcSip2c1rXa
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

const app: Express = express(); 
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = "mongodb+srv://vpf2025:qmr65uQDyoYA0juy@chizetafinancetracker.h1e5x.mongodb.net/";
mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`ServerRunning on Port ${port}`);
});