import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import fetchSearchMovie from 'services/fetchSearchMovie';
import FilmList from 'components/FilmList/FilmList';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import Status from 'constants/constants';

interface Film {
  id: number;
  original_title: string;
  poster_path: string;
  title: string;
  vote_average: number;
}

const Movies: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Film[]>([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();

  const filmName = searchParams.get('search');

  const handleSubmit = (value: string): void => {
    setSearchParams({ search: value });
  };

  useEffect(() => {
    if (!filmName) {
      return;
    }

    const abortController = new AbortController();

    (async function fetch() {
      setLoading(true);
      setStatus(Status.PENDING);

      try {
        const searchFilms = await fetchSearchMovie(filmName, abortController);

        setData([...searchFilms]);
        setStatus(Status.RESOLVED);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, [filmName]);

  return (
    <>
      {status === Status.REJECTED ? (
        <h2>
          An error occurred, we could not upload the data, please try reloading
          the page and try again :)
        </h2>
      ) : (
        <>
          <section>
            <SearchForm onSubmit={handleSubmit}></SearchForm>
          </section>
          <section>
            {loading && <Loader />}
            {status === Status.RESOLVED && <FilmList films={data}></FilmList>}
            {!data.length && status === Status.RESOLVED && (
              <h2>There are no movies that matched your query.</h2>
            )}
          </section>
        </>
      )}
    </>
  );
};

export default Movies;
