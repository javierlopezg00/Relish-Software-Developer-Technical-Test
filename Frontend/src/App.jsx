import { useEffect, useState } from 'react'
import Card from './Components/Card'
import Footer from './Components/Footer'
import axios from 'axios'

import './App.css'

function App() {
  const [filters, setFitlers] = useState({})
  const [songs, setSongs] = useState([])

  // External API request and state setting 
  const getSongs = async (filters) => {
    try {
      const response = await axios.get("http://relish.javierlopez-dev.com/externalapi/photos", {
        params: {
          ...filters
        }
      });

      setSongs(response.data);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  // Initialize the view with first 3 songs by default 
  useEffect(() => {
    getSongs({
      offset: 0,
      limit: 3
    })
  },[])


  const handleChange = (e) => {
    setFitlers(prevState => {
      return{
        ...prevState,
        [e.target.name]: (e.target.value).trim()
      }
    })
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    getSongs(filters)
  }

  return (
    <>
    <div className="container">
  <span className="fs-1 m-4"><strong>MetaPhoto</strong></span>
    <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
  <form className="nav nav-pills d-flex flex-wrap justify-content-center w-75" onSubmit={handleSubmit}>
    <li className="nav-item m-2 w-50">
      <input
        name="title"
        type="text"
        className="form-control"
        placeholder="Title"
        onChange={handleChange}
      />
    </li>
    <li className="nav-item m-2 w-50">
      <input
        name="album.title"
        type="text"
        className="form-control"
        placeholder="Album Title"
        onChange={handleChange}
      />
    </li>
    <li className="nav-item m-2 w-50">
      <input
        name="album.user.email"
        type="email"
        className="form-control"
        placeholder="Email"
        onChange={handleChange}
      />
    </li>
    <li className="nav-item m-2 w-50">
      <input
        name="offset"
        type="number"
        className="form-control"
        placeholder="Offset"
        onChange={handleChange}
      />
    </li>
    <li className="nav-item m-2 w-50">
      <input
        name="limit"
        type="number"
        className="form-control"
        placeholder="Limit"
        onChange={handleChange}
      />
    </li>
    <li className="nav-item m-2 w-50">
      <button type="submit" className="btn btn-secondary w-100">
        Filter
      </button>
    </li>
  </form>
</div>

      <div className="row d-flex justify-content-center">
        <p>Songs filtered: <b>{songs ? songs.length: 0}</b></p>
      {
          songs.map((song, key) => {
            return(
              <Card 
              key={key}
              id={song.id}
              title={song.title}
              url={song.url}
              albumTitle={song.album.title}
              userName = {`${song.album.user.name} | @${song.album.user.username}`}
              userEmail={song.album.user.email}
              userPhone={song.album.user.phone}
              userWebsite={song.album.user.website}
              userAddress={`${song.album.user.address.city} | ${song.album.user.address.street} | ${song.album.user.address.suite} | ${song.album.user.address.zipcode}`}
              userCompany={`${song.album.user.company.name} | ${song.album.user.company.catchPhrase} | ${song.album.user.company.bs}`}
              />
            )
          })
        }
      </div>
    </div>
    <Footer />
    </>
  )
}

export default App
