import styles from "../styles/Home.module.css";

export default function Home({ data }) {
  const { results = [] } = data;

  return (
    <div className={styles.container}>
      <h1>Popular Movies</h1>
      <div className={styles.grid}>
        {results.map((movie) => (
          <div key={movie.id} className={styles.list}>
            <a href="#">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie-poster"
              />
              <h4>{movie.title}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
