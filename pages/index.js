import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ data, query }) {
  const { results = [] } = data;

  return (
    <div className={styles.container}>
      <h1>Popular Movies</h1>
      <Link href={query.page > 1 ? `/?page=${parseInt(query.page) - 1}` : ""}>
        <button disabled={!query || query.page < 2} className={styles.btn}>
          prev
        </button>
      </Link>
      <Link
        href={query.page ? `/?page=${parseInt(query.page) + 1}` : "/?page=2"}
      >
        <button
          disabled={query.page == data.total_pages}
          className={styles.btn}
        >
          next
        </button>
      </Link>
      <div className={styles.grid}>
        {results.map((movie) => (
          <div key={movie.id} className={styles.list}>
            <Link href={`/movies/${movie.id}`}>
              <a>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movie-poster"
                />
                <h4>{movie.title}</h4>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${query.page}`
  );
  const data = await res.json();
  return {
    props: {
      data,
      query,
    },
  };
}
