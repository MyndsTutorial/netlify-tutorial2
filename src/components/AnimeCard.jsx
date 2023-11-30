import React, {useEffect, useState} from "react";
import "./AnimeCard.css";
import GenreIcon from "./GenreIcon";
import {BiSelectMultiple} from "react-icons/bi";
import {BsFillTrashFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {animeActions} from "../redux/slices/AnimesSlice";
function AnimeCard(props) {
  const animesFavoritos = useSelector((state) => state.animes.animesList);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.mal_id) {
      const isAlreadyAdded = animesFavoritos.some(
        (anime) => anime.mal_id === props.mal_id
      );
      setAlreadyAdded(isAlreadyAdded);
    }
  }, []);
  return (
    <div className="anime-card">
      <div id="reduxButton">
        {alreadyAdded ? (
          <div
            className="icon-anime-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              setAlreadyAdded((state) => !state);
              console.log(props.mal_id);
              dispatch(animeActions.removeAnime(props.mal_id));
            }}
          >
            {" "}
            <BsFillTrashFill fontSize={23} color={isHovered ? "cyan" : "red"} />
          </div>
        ) : (
          <div
            className="icon-anime-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              setAlreadyAdded((state) => !state);
              dispatch(animeActions.addAnime(props));
            }}
          >
            <BiSelectMultiple
              color={isHovered ? "cyan" : "white"}
              fontSize={22}
            />
          </div>
        )}
      </div>
      <div className="card-title">{props.title}</div>
      <div className="content">
        <div>
          <img
            src={props.images.webp.large_image_url}
            alt=""
            className="image-card"
          />
        </div>

        <div className="sinopse">{props.synopsis}</div>
      </div>
      <div>
        <div className="studios">
          <div>
            {props.studios.map((s) => (
              <p key={s.name}>{s.name}</p>
            ))}
          </div>
          <div>{props.aired.prop.from.year}</div>
        </div>
        <div className="genres">
          <div>
            {props.genres.map((g) => (
              <GenreIcon key={g.name} genre={g.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCard;
