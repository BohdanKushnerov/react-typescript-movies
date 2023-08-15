import axios from 'axios';
import stringFromGanresArray from 'utils/stringFromGanresArray';

async function fetchMovie(
  movieId: string | undefined,
  abortController: AbortController
) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US`,
    { signal: abortController.signal }
  );

  const { vote_average, overview, title, genres, poster_path } = response.data;

  return {
    vote_average,
    overview,
    title,
    genres: stringFromGanresArray(genres),
    poster_path: poster_path
      ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`
      : 'https://via.placeholder.com/300x450',
  };
}

export default fetchMovie;
