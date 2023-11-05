import axios from "axios";
import {useState, useEffect} from "react";

export function useApiAnimeData(anime) {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const searchInput = anime.toLowerCase();
        const formattedSearch = searchInput.replace(/\s+/g, "-");
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${formattedSearch}`
        );

        if (response.status === 200) {
          setAnimeData(response.data.data);
          // console.log(response.data.data)
        } else {
          setError("Failed to fetch anime data");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [anime]);

  return {animeData, loading, error};
}
