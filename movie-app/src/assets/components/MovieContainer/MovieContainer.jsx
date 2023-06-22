import MovieCards from "../MovieCards/MovieCards";

export default function MovieContainer({moviePosters}) {
  return (
    <div>
      <MovieCards 
      moviePosters={moviePosters}
      />
    </div>
  );
}