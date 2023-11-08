import React from 'react'
import "./AnimeCard.css"
import GenreIcon from './GenreIcon'
function AnimeCard(props) {
  return (
    <div className='anime-card'>
      <div className='card-title'>
        {props.title}
      </div>
      <div className='content'>
        <div>
          <img 
            src={props.images.webp.large_image_url} 
            alt="" 
            className="image-card"  
          />
        </div>
        
        <div className="sinopse">
            {props.synopsis}
        </div>
      </div>
      <div>
        <div className='studios'>
          <div>
            {props.studios.map(s=><p key={s.name}>{s.name}</p>)}
          </div>
          <div>
            {props.aired.prop.from.year}
          </div>
        </div>
        <div className="genres"> 
          <div>
            {props.genres.map(g=><GenreIcon key={g.name} genre={g.name}/>)}
          </div>
        </div>  
      </div>
    </div>
  )
}

export default AnimeCard