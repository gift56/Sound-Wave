import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery();

  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=at_ZuX4aqM0TYQoRKvcrIMNR0Lrjnryz&ipAddress=8.8.8.8`
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log("Error: ", err))
      .finally(() => setLoading(false));
  }, [country]);

  console.log(country);

  return <div></div>;
};

export default AroundYou;
