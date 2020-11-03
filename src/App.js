import React, {useEffect, useState} from 'react';


import './App.css';
import Movie from './components/Movie';
const FEATURED_API = https://api.themoviedb.org/3/discover/movie?api_key=3c1a0e44efdac85f32baaab406391ea4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

const IMG_API = https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=3c1a0e44efdac85f32baaab406391ea4&language=en-US
const SEARCH_API = https://api.themoviedb.org/3/search/movie?api_key=3c1a0e44efdac85f32baaab406391ea4&language=en-US&page=1&include_adult=false



function App() {
 
  const [movies, setMovies] = useState([])
  return (
    <div className="App">
      {movies.map(map => (
              <Movie/>
      ))}
    </div>
  );
}

export default App;
