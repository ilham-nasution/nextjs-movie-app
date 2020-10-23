export default function MovieDetail({ data }) {
  console.log(data);
  return <h1>Movie</h1>;
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return { props: { data } };
}

export async function getStaticPaths() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  const paths = data.results.map((movie) => `/movies/${movie.id}`);
  return { paths, fallback: false };
}
