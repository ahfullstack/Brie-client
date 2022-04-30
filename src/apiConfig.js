let APILink

const apiUrls = {
    production: "",
    development: "http://localhost:3001/"
}

if (window.location.hostname === "localhost") {
    APILink = apiUrls.development
} else {
    APILink = apiUrls.production
}

export default APILink