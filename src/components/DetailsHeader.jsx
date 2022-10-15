import { Link } from "react-router-dom";

const DetailsHeader = ({ songData, artistId, artistData }) => {
  const artist = artistData?.artists[artistId]?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img
          src={
            artistId
              ? artist?.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart
          }
          alt="art"
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
        />
        <div className="ml-5">
          <p className="font-bold text-white sm:text-3xl text-xl">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link>
              <p className="text-gray-400 text-base mt-2">
                {songData?.subtitle}
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
