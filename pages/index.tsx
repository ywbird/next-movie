import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "ffbb1e39db3dd7253121c6925c0bd31a";
interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home(): JSX.Element {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {}, []);
  (async () => {
    const { results }: { results: Movie[] } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      )
    ).json();
    setMovies(results);
  })();
  return (
    <div>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
