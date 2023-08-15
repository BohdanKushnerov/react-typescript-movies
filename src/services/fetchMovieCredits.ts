import axios from 'axios';

type MovieCredits = {
  id: number;
  name: string;
  profile_path: string;
};

async function fetchMovieCredits(
  movieId: string | undefined,
  abortController: AbortController
) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US`,
    { signal: abortController.signal }
  );

  return response.data.cast.map(({ profile_path, name, id }: MovieCredits) => {
    return {
      profile_path: profile_path
        ? `https://image.tmdb.org/t/p/w138_and_h175_face${profile_path}`
        : 'https://via.placeholder.com/138x175',
      name,
      id,
    };
  });
}

export default fetchMovieCredits;
