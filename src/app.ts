import express from "express";
import { connectDB } from "./database/connectDB";

connectDB();

export const app = express();
app.use(express.json());
