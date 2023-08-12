import PropTypes from 'prop-types';
import Progressbar from 'components/Progressbar/Progressbar';
import { MovieWrap, InfoWrap, WrapBar, Title, SubTitle } from './Movie.styled';

const Movie = ({ state }) => {
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

Movie.propTypes = {
  state: PropTypes.shape({
    genres: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default Movie;
