import React, {useEffect, useState} from "react";
import "./Favorito.css";
import {useLoaderData, useNavigate} from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import {useDispatch, useSelector} from "react-redux";
import {saveAnimesToData} from "../redux/slices/actions/saveAnimesToStorage";
import Popup from "../components/Popup";
function Favorito() {
  const isLogged = useSelector((state) => state.user.isLogged);
  const favoritesList = useSelector((state) => state.animes.animesList);
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const dispatch = useDispatch();
  const [popupContent, setPopupContent] = useState({message: "", color: ""});
  const [showPopup, setShowPopup] = useState(false);
  function showAndHidePopup(message, color) {
    setPopupContent({message, color});
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3500);
  }
  useEffect(() => {
    if (isLogged === false) {
      navigate("/login");
    }
  }, []);
  function saveAnimes() {
    try {
      dispatch(saveAnimesToData(favoritesList));
      showAndHidePopup("Salvo com sucesso", "success");
    } catch (error) {
      showAndHidePopup("Salvo com sucesso", "warning");
    }
  }
  return (
    <div>
      <div>
        <div className="anime-cards">
          {favoritesList.map((a) => (
            <AnimeCard key={a.mal_id} {...a} />
          ))}
        </div>
      </div>
      <div
        id="saveFavoritos"
        style={
          isHover
            ? {fontSize: "1rem", borderRadius: "25px"}
            : {fontSize: "1.6rem", borderRadius: "50%"}
        }
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={isHover ? "animation-button" : ""}
        onClick={() => saveAnimes()}
      >
        {isHover ? "Salvar os favoritos" : "+"}
      </div>
      {showPopup ? (
        <Popup message={popupContent.message} color={popupContent.color} />
      ) : null}
    </div>
  );
}

export default Favorito;
