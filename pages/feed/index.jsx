import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import SkelatonLoader from '../../components/loader/skeleton-loader';
import Error from '../../components/error';
import Card from '../../components/card';
import Shorts from '../../components/Shorts';
import { useSearchParams } from 'react-router-dom';

const Feed = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category');
  const query = category || 'javascript';

  useEffect(() => {
    api
      .get('/search', {
        params: {
          query: query,
          limit: 50,
        },
      })
      .then((res) => {
        if (res.data?.data) {
          console.log(res.data.data);
          setData(res.data.data);
        } else {
          setData([]); // güvenli fallback
          setError(res.data?.msg || 'Veri alınamadı');
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <SkelatonLoader />;
  if (error) return <Error message={error} />;

  //Filter yapılacaktı !

  let shorts = [];

  data.forEach((item) => {
    if (item.type === 'shorts_listing') {
      shorts.push(...item.data);
    }
  });

  console.log('ben shorts dizisiyim', shorts);

  const videos = data.filter((item) => item.type === 'video');

  return (
    <div className="page">
      <div className="space-y-8">
        {shorts.length > 0 && <Shorts data={shorts.slice(0, 8)} />}

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
          {videos.map((video) => (
            <Card video={video} key={video.videoId} />
          ))}
        </div>

        {shorts.length > 8 && <Shorts data={shorts.slice(8, 16)} />}
      </div>
    </div>
  );
};

export default Feed;
