export default function MovieCards({Poster}) {
    return (
      <div className="moviecard">
        {/* poster */}
        <img src={Poster?.Poster} alt="" />
        <h1></h1>
    
        <h1>Search for a movie</h1> 
      </div>
    );
  }