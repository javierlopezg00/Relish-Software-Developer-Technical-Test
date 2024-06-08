import express from "express";
import photosRouter from "./src/routes/photos.js";
import 'dotenv/config'

const app = express()
app.use(express.json())

//app.use(express.static('./../Frontend/dist'));

// Website allow to connect and request methods/headers allow
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', `http://localhost:5173`);
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use("/externalapi", photosRouter)
app.listen(process.env.PORT, () => console.log(`Listening on port: ${process.env.PORT}`))