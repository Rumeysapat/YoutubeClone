import { millify } from 'millify';
import { useState } from 'react';

const Description = ({ video }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-dark mt-4 p-2 cursor-pointer hover:bg-dark/80 transition rounded-md overflow-hidden">
      <div className="flex gap-4 mb-2 font-semibold">
        <p>{millify(video.viewCount)} görüntülenme</p>
        <p>{new Date(video.publishedAt).toLocaleDateString('tr-TR')}</p>
      </div>

      <p className="whitespace-pre-wrap">
        {isOpen ? video.description : video.description.slice(0, 100)}
      </p>

      {video.description.length > 100 && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-2 text-sm font-semibold text-gray-400"
        >
          {isOpen ? 'Daha az göster' : 'Daha fazla'}
        </button>
      )}
    </div>
  );
};

export default Description;
