import { useEffect, useState } from "react";
import MovieContainer from "./assets/components/MovieContainer/MovieContainer";
import "./App.css";
function App() {
const [moviePosters, setMoviePosters] = useState({});
const [movieData, setMovieData] = useState({});


  useEffect(() => {
    const fetchMoviePosters = async () => {
      const getPosters = await fetch("http://www.omdbapi.com/?apikey=67b30870&i=tt1285016");
      const jsonPosters = await getPosters.json();
      setMoviePosters(jsonPosters);
    };
    fetchMoviePosters();
  }, []);


  return (
    <>
      {/* <div>
        <input 
        type="text"
        name="movietitle"
        onChange={(e) =>
          // setMovieData({ ...movieData, [e.target.]})
        }
        />
        
        <button>search</button>
        <MovieContainer 
        moviePosters={moviePosters}
        />
      </div> */}
    </>
  );
}   
export default App;

