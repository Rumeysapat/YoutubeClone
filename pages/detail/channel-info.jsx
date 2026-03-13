import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import millify from 'millify';

const ChannelInfo = ({ video }) => {
  return (
    <div className="flex justify-between sm:items-center max-sm:flex-col max-sm:gap-3">
      {/* Sol */}
      <div className="flex items-center gap-5">
        <div className="flex gap-2 sm:gap-4 items-center">
          <img
            src={video?.channelThumbnail?.[0].url}
            className="rounded-full size-10 sm:size-12"
          />

          <div>
            <h4 className="font-bold">{video?.channelTitle}</h4>
            <p className="text-gray-400">{video?.subscriberCountText}</p>
          </div>
        </div>

        <button className="bg-white px-4 py-1 text-black rounded-full whitespace-nowrap">
          Abone Ol
        </button>
      </div>

      {/* Sağ */}
      <div className="flex items-center bg-dark rounded-full max-sm:w-fit cursor-pointer">
        <div className="flex py-2 px-3 sm:px-4 items-center gap-2 font-bold border-r border-gray-500">
          <AiOutlineLike />
          <span>{millify(video.likeCount)}</span>
        </div>

        <div className="py-1 px-3 sm:px-4">
          <AiOutlineDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;
