import { Link, useLocation } from 'react-router-dom';
import Progressbar from 'components/Progressbar/Progressbar';
import {
  TrandingList,
  Item,
  Title,
  Img,
  WrapProgressbar,
} from './FilmList.styled';

type Film = {
  id: number;
  original_title: string;
  poster_path: string;
  title: string;
  vote_average: number;
};

type FilmListProps = {
  films: Film[];
};

const FilmList: React.FC<FilmListProps> = ({ films }) => {
  const location = useLocation();

  function takePathto(filmId: number) {
    return location.pathname === '/' ? `movies/${filmId}` : `${filmId}`;
  }

  return (
    <TrandingList>
      {films.map(({ id, original_title, vote_average, poster_path, title }) => {
        return (
          <Item key={id}>
            <Link key={id} to={takePathto(id)} state={{ from: location }}>
              <Img src={poster_path} alt={title} width={220} height={330} />
              <Title>{original_title}</Title>
            </Link>
            <WrapProgressbar>
              <Progressbar
                value={Math.round(vote_average * 10)}
                text={`${Math.round(vote_average * 10)}%`}
              />
            </WrapProgressbar>
          </Item>
        );
      })}
    </TrandingList>
  );
};

export default FilmList;
