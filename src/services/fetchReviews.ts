import axios from 'axios';

type Reviews = {
  author: string;
  content: string;
  id: string;
  url: string;
};

async function fetchReviews(
  movieId: string | undefined,
  abortController: AbortController
) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1`,
    { signal: abortController.signal }
  );

  return response.data.results.map(({ author, content, id, url }: Reviews) => {
    return {
      author,
      content,
      id,
      url,
    };
  });
}

export default fetchReviews;
