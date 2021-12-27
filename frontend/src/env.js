var url = window.location.origin
if(url.includes("localhost") || url.includes("127.0.0.1")){
    //url = "http://localhost:8000"
    url = 'https://dash-dev.maiachess.com'
}

export const SERVER_URL = url;