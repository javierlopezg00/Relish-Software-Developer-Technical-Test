# Relish Software Developer Technical Test

## Local Development Setup
1. Commands to deploy the local server
- git clone https://github.com/javierlopezg00/Relish-Software-Developer-Technical-Test.git
- cd Relish-Software-Developer-Technical-Test/Backend/
- npm install
- npm start
- Open [http://localhost:80](http://localhost:80) in your browser.

## Public Environment

- Web app: [http://relish.javierlopez-dev.com](http://relish.javierlopez-dev.com)
- API: [http://relish.javierlopez-dev.com/externalapi/photos/](http://relish.javierlopez-dev.com/externalapi/photos/)
- API Examples:
  - [http://relish.javierlopez-dev.com/externalapi/photos/1](http://relish.javierlopez-dev.com/externalapi/photos/1)
  - [http://relish.javierlopez-dev.com/externalapi/photos?title=repudiandae%20iusto](http://relish.javierlopez-dev.com/externalapi/photos?title=repudiandae%20iusto)
  - [http://relish.javierlopez-dev.com/externalapi/photos?album.title=quidem&limit=10&offset=50](http://relish.javierlopez-dev.com/externalapi/photos?album.title=quidem&limit=10&offset=50)

## Local Environment

- Web app: [http://localhost](http://localhost)
- API: [http://localhost/externalapi/photos/](http://localhost/externalapi/photos/)
- API Examples:
  - [http://localhost/externalapi/photos/1](http://localhost/externalapi/photos/1)
  - [http://localhost/externalapi/photos?title=repudiandae%20iusto](http://localhost/externalapi/photos?title=repudiandae%20iusto)
  - [http://localhost/externalapi/photos?album.title=quidem&limit=10&offset=50](http://localhost/externalapi/photos?album.title=quidem&limit=10&offset=50)

## Technologies Used

### Frontend

- React/Vite
  - HTML
  - CSS
  - Javascript
  - Bootstrap (for responsive design)
  - Axios (for HTTP requests)

### Backend

- Node.js
  - Express
  - Axios
  - dotenv
  - nodemon

### Hosting & Deployment

- AWS
  - Lightsail
  - Debian
  - pm2 (for keeping Node.js processes alive)

