import MovieCards from "../MovieCards/MovieCards";
export default function MovieContainer({moviePosters}) {
  console.log(moviePosters)
  return (
    <div>
      {moviePosters?.map((Poster,index) => (
        <MovieCards 
        Poster={Poster}
        key={index}
        />
  ))}
      
    </div>
  );
}


