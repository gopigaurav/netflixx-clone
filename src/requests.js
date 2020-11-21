const API_KEY = "d52e0431788e3e1fb9bfef780e147211";

const requests = {
    fetchTrending : '/trending/all/week?api_key=d52e0431788e3e1fb9bfef780e147211&language=en-US',
    fetchNetflixOriginals : '/discover/tv?api_key=d52e0431788e3e1fb9bfef780e147211&with_networks=213',
    fetchTopRated : '/movie/top_rated?api_key=d52e0431788e3e1fb9bfef780e147211&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api_key=d52e0431788e3e1fb9bfef780e147211&with_genres=99',

}

export default requests;