import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../utils/api';
import BasicLoader from '../../components/loader/basic-loader';
import Error from '../../components/error';
import Shorts from '../../components/shorts';
import Card from '../../components/card';
import Spinner from '../../components/loader/spinner';

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [token, setToken] = useState(null);
  const [moreLoading, setMoreLoading] = useState(false);

  // url'den aratılan terimi al
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search_query');

  // sayfa yüklenince api'dan verileri al
  useEffect(() => {
    setLoading(true);

    const params = {
      query,
    };

    api
      .get('/search', { params })
      .then((res) => {
        setData(res.data.data);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  // daha fazla içeriği yükle
  const handleLoadMore = () => {
    setMoreLoading(true);

    const params = {
      query,
      token,
    };

    api
      .get('/search', { params })
      .then((res) => {
        setData([...data, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setMoreLoading(false));
  };

  // api'dan gelen yanıt içerisinden video | shorts | shorts_listing türündeki verileri filtrledik
  const filtredArr = data.filter(
    (i) =>
      i.type === 'video' || i.type === 'shorts' || i.type === 'shorts_listing',
  );

  return (
    <div className="page">
      {loading ? (
        <BasicLoader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <>
          <h2 className="text-2xl my-3">
            <span className="font-bold">{query}</span> için sonuçlar
          </h2>

          <div className="flex flex-col gap-4 @container">
            {filtredArr.map((item, key) =>
              item.type === 'shorts_listing' ? (
                <Shorts data={item.data} key={key} />
              ) : (
                <Card video={item} key={key} isRow />
              ),
            )}
          </div>

          {moreLoading && <Spinner />}

          {!moreLoading && token && (
            <div className="flex justify-center ">
              <button
                onClick={handleLoadMore}
                className="bg-zinc-700 py-2 px-5 my-10 rounded-md cursor-pointer hover:bg-zinc-800 transition"
              >
                Daha Fazla
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
