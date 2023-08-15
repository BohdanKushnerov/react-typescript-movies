import { useEffect, useState } from 'react';
import fetchTrending from 'services/fetchTrending';
import FilmList from 'components/FilmList/FilmList';
import { Section } from './Home.styled';
import Status from 'constants/constants';

interface FilmsState {
  id: number;
  original_title: string;
  poster_path: string;
  title: string;
  vote_average: number;
}

const Home: React.FC = () => {
  const [films, setFilms] = useState<FilmsState[]>([]);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    const abortController = new AbortController();

    (async function fetchFilms() {
      setStatus(Status.PENDING);
      try {
        const trandFilms = await fetchTrending(abortController);

        setFilms([...trandFilms]);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        console.log(error);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Section>
      {films.length !== 0 && (
        <>
          <h2>Tranding today</h2>
          <FilmList films={films}></FilmList>
        </>
      )}
      {status === Status.REJECTED && (
        <h2>
          An error occurred, we could not upload the data, please try reloading
          the page and try again :)
        </h2>
      )}
    </Section>
  );
};

export default Home;
