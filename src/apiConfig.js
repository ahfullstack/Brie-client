let APILink

const apiUrls = {
    production: "https://brie-app-server.herokuapp.com/",
    development: "http://localhost:3001/"
}

if (window.location.hostname === "localhost") {
    APILink = apiUrls.development
} else {
    APILink = apiUrls.production
}

export default APILink