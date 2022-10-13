import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle />
  ) : (
    <FaPlayCircle />
  );

export default PlayPause;
