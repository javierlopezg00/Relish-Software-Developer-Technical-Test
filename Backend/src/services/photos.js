import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com"

export const photoIdService = async (id) => {
  try {
    // API requests
    const photo = await axios.get(`${apiURL}/photos/${id}`)
    const album = await axios.get(`${apiURL}/albums/${photo.data.albumId}`)
    const user = await axios.get(`${apiURL}/users/${album.data.userId}`)

    // Join data
    const photoData = {
      ...photo.data,
      album: {
        ...album.data,
        user: user.data
      }
    };

    return photoData;
  } catch (error) {
    console.error("Error fetching by params: ", error)
    throw error
  }
}

export const photosService = async (params) =>{
  try {
    // API parallel request
    const[photos, albums, users] = await Promise.all([
      axios.get(`${apiURL}/photos`),
      axios.get(`${apiURL}/albums`),
      axios.get(`${apiURL}/users`)
    ])
    
    // Join by ID´s
      const allPhotos = photos.data.map(photo => {
      const album = albums.data.find(album => album.id === photo.albumId)
      const user = users.data.find(user => user.id === album.userId)

      return {
        ...photo,
        album: {
          ...album,
          user
        }
      }
    })
    
    // Filter by params
    const filteredPhotos = allPhotos.filter(photo => {
      const { title, album } = photo
      const { title: albumTitle, user } = album
      const { email } = user
      
      return (
        (!params.title || title.includes(params.title)) &&
        (!params['album.title'] || albumTitle.includes(params['album.title'])) &&
        (!params['album.user.email'] || email.includes(params['album.user.email']))
      );
    })

    const limit = params.limit ? +params.limit: 25
    const offset = params.offset ? +params.offset: 0
    
    return filteredPhotos.slice(offset, offset+limit)
  } catch (error) {
    console.error("Error fetching by filters: ", error)
    throw error
  }
}
