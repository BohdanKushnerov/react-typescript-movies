import Progressbar from 'components/Progressbar/Progressbar';
import { MovieWrap, InfoWrap, WrapBar, Title, SubTitle } from './Movie.styled';

type MovieProps = {
  state: {
    genres: string;
    overview: string;
    poster_path: string;
    title: string;
    vote_average: number;
  };
};

const Movie: React.FC<MovieProps> = ({ state }) => {
  const { vote_average, overview, title, genres, poster_path } = state;

  return (
    <MovieWrap>
      <img src={poster_path} alt={title} />

      <InfoWrap>
        <div>
          <Title>{title}</Title>
          <WrapBar>
            User score:
            <Progressbar
              value={Math.round(vote_average * 10)}
              text={`${Math.round(vote_average * 10)}%`}
            />
          </WrapBar>
        </div>
        <div>
          <SubTitle>Overview</SubTitle>
          <p>{overview}</p>
        </div>
        <div>
          <SubTitle>Genres</SubTitle>
          <p>{genres}</p>
        </div>
      </InfoWrap>
    </MovieWrap>
  );
};

export default Movie;
