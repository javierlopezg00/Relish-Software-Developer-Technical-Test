Public Enviroment{
	Web app: 
  	http://relish.javierlopez-dev.com
	API:
  	http://relish.javierlopez-dev.com/externalapi/photos/
	API examples:
  	http://relish.javierlopez-dev.com/externalapi/photos/1
  	http://relish.javierlopez-dev.com/externalapi/photos?title=repudiandae%20iusto
  	http://relish.javierlopez-dev.com/externalapi/photos?album.title=quidem&limit=10&offset=50
}

Local Enviroment{
	Web app: 
  	http://localhost
	API:
  	http://localhost/externalapi/photos/  
	API examples:
  	http://localhost/externalapi/photos/1
  	http://localhost/externalapi/photos?title=repudiandae%20iusto
  	http://localhost/externalapi/photos?album.title=quidem&limit=10&offset=50
}

Technologies Used: 
Frontend
  React/Vite{
  	HTML
  	CSS
  	Bootstrap (for responsive design)
  	Axios (for HTTP requests)
  }
Backend
  Node.js{
  	Express
  	Axios
  	dotenv 
  	nodemon
  }
Hosting & Deployment
  AWS{
  	Lightsail
  	Debian
  	pm2 (for keeping Node.js processes alive)
  }

Local Development Setup:
	Clone the repository
	  git clone https://github.com/javierlopezg00/Relish-Software-Developer-Technical-Test.git
	Navigate to the backend folder
	  cd Relish-Software-Developer-Technical-Test/Backend/
	Install dependencies
	  npm install
	Start the server
	  npm start
	Open localhost:80 in your browser.

