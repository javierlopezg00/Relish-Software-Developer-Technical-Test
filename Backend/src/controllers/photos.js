import { photoIdService, photosService } from "../services/photos.js";

export const photoControllerId = async(req, res) =>{
  try {
    const photo = await photoIdService(req.params.id)
    res.json(photo)
  } catch (error) {
    console.error(error)
    res.status(500).send("Error fetching data")
  }
}

export const photoController = async (req, res) =>{
  try {
    const photos = await photosService(req.query)
    res.json(photos)
  } catch (error) {
    console.error(error)
    res.status(500).send("Error fetching data")
  }
}