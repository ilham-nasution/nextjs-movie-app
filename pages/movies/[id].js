export default function MovieDetail({ data }) {
  return (
    <>
      <h1>{data.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
      />
      <h3>{data.overview}</h3>
      <h5>{data.release_date}</h5>
      <p>{data.vote_average}</p>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`
  );
  const data = await res.json();
  return { props: { data } };
}
