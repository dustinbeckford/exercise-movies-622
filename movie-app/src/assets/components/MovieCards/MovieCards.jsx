export default function MovieCards({Poster}) {
    return (
      <div>
        {/* poster */}
        <img src={Poster?.Poster} alt="" />
    
        <h1>Search for a movie</h1>
      </div>
    );
  }