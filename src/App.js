import React, {useEffect, useState} from "react";
import {useApiAnimeData} from "./hooks/getAPIData";
import AnimeCard from "./components/AnimeCard";
import "./App.css";
import Popup from "./components/Popup";
function AnimeComponent() {
  const [animeName, setAnimeName] = useState("one piece");
  const [animeDigitado, setAnimeDigitado] = useState("one piece");
  const {animeData, loading, error} = useApiAnimeData(animeName);
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
    if (!loading) {
      if (error) {
        showAndHidePopup(`Error: ${error}`, "warning");
      } else {
        showAndHidePopup("Animes coletados com sucesso", "success");
      }
    }
  }, [loading, error, animeData]);
  const handleInputChange = (e) => {
    setAnimeDigitado(e.target.value);
  };
  function BuscarOAnime() {
    setAnimeName(animeDigitado);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Enter anime name"
        value={animeDigitado}
        onChange={handleInputChange}
      />
      <button onClick={() => BuscarOAnime()}>Pesquisar</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {Array.isArray(animeData) ? (
        <div className="anime-cards">
          {animeData.map((a) => (
            <AnimeCard key={a.mal_id} {...a} />
          ))}
        </div>
      ) : (
        animeData && <div>No anime data available</div>
      )}
      {showPopup ? (
        <Popup message={popupContent.message} color={popupContent.color} />
      ) : null}
    </div>
  );
}

export default AnimeComponent;
