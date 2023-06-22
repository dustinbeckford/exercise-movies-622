export default function MovieCards({moviePosters}) {
    return (
      <div>
        {/* poster */}
        <img src={moviePosters?.Poster} alt="" />
    
        <h1>Title</h1>
      </div>
    );
  }