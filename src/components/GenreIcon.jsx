import React from 'react'
import "./GenreIcon.css"
function GenreIcon({genre}) {
  return (
    <div className="genre-icon">
      {genre}
    </div>
  )
}

export default GenreIcon