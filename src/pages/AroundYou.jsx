import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    axios
      .get("http://wrongurl")
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log("Error: ", err))
      .finally(() => setLoading(false));
  }, [country]);

  return <div></div>;
};

export default AroundYou;
