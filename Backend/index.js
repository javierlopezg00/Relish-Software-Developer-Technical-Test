import express from "express";
import photosRouter from "./src/routes/photos.js";

const app = express()
app.use(express.json())

// Website allow to connect and request methods/headers allow
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use("/externalapi", photosRouter)

app.listen(3003, () => console.log(`Listening on port: 3003`))