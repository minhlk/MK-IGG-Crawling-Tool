let paramsString = document.location.hash; 
let searchParams = new URLSearchParams(paramsString);
if (!searchParams.has('#access_token')) {
    window.location.href  = "https://public-api.wordpress.com/oauth2/authorize?client_id=74597&redirect_uri=https://minhlk.github.io/MK-IGG-Crawling-Tool&response_type=token&blog=162924930";
}

let accessToken = searchParams.get('#access_token');

