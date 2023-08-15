import axios from 'axios';

type SearchMovies = {
  id: number;
  original_title: string;
  vote_average: number;
  poster_path: string | null;
  title: string;
};

async function fetchSearchMovie(
  filmName: string,
  abortController: AbortController
) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=${filmName}`,
    { signal: abortController.signal }
  );

  return response.data.results.map(
    ({
      id,
      original_title,
      vote_average,
      poster_path,
      title,
    }: SearchMovies) => {
      return {
        id,
        original_title,
        vote_average,
        poster_path: poster_path
          ? `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`
          : 'https://via.placeholder.com/220x330',
        title,
      };
    }
  );
}

export default fetchSearchMovie;
