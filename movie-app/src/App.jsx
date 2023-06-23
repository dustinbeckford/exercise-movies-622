import { useEffect, useState } from "react";
import MovieContainer from "./assets/components/MovieContainer/MovieContainer";
import "./App.css";
function App() {
const [moviePosters, setMoviePosters] = useState([]);
const [movieData, setMovieData] = useState({movieTitle:""});
const fetchMoviePosters1 = async () => {
  const getPosters = await fetch("http://www.omdbapi.com/?apikey=67b30870&i=tt0296310");
  const jsonPosters = await getPosters.json();
  setMoviePosters([...moviePosters,jsonPosters]);
};
const fetchMoviePosters2 = async () => {
  const getPosters = await fetch("http://www.omdbapi.com/?apikey=67b30870&i=tt5491994");
  const jsonPosters = await getPosters.json();
  setMoviePosters([...moviePosters,jsonPosters]);
};
const fetchMoviePosters3 = async () => {
  const getPosters = await fetch("http://www.omdbapi.com/?apikey=67b30870&i=tt6769208");
  const jsonPosters = await getPosters.json();
  setMoviePosters([...moviePosters,jsonPosters]);
};
  useEffect(() => {
    fetchMoviePosters1();
    fetchMoviePosters2();
    fetchMoviePosters3();
  }, []);

  const fetchPosters = async () => {
    const getPosters = await fetch(
      `http://www.omdbapi.com/?apikey=67b30870&s=${movieData.movieTitle}`
    );
    const jsonPosters = await getPosters.json();
    setMoviePosters(jsonPosters.Search);
  };

  return (
    <>
      <div>
        <input 
        type="text"
        name="movieTitle"
        onChange={(e) =>
          setMovieData({ ...movieData, [e.target.name]: e.target.value})
        }
        value={movieData?.movieTitle}
        />
        <button onClick={fetchPosters}>search</button>
        <MovieContainer 
        moviePosters={moviePosters}
        />
      </div>
    </>
  );
}   
export default App;

