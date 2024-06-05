import express from "express";
import photosRouter from "./src/routes/photos.js";

const app = express()
app.use(express.json())

app.use("/externalapi", photosRouter)

app.listen(3003, () => console.log(`Listening on port: 3003`))