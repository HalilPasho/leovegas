import _ from "lodash";
import { API_KEY } from "./API_KEY";
export const requestMovies = _.memoize(async (title, pages = 1) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=${pages}&include_adult=false`
  );

  // In case we get not okay response
  if (res.status !== 200) return [];

  const movieArray = await res.json();
  return movieArray;
});
