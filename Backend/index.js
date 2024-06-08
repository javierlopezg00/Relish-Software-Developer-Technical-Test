import express from "express";
import photosRouter from "./src/routes/photos.js";

const app = express()
app.use(express.json())
const allowedOrigins = ['http://localhost:5173', 'https://metaphoto-frontend.s3.amazonaws.com'];


// Website allow to connect and request methods/headers allow
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

app.use("/externalapi", photosRouter)
app.listen(8080, () => console.log(`Listening on port: 8080`))