function Card({ city }) {
  return (
    <div
      className=" mx-auto  text-center p-4 border rounded shadow"
      style={{ maxWidth: "350px" }}
    >
      <h1>{city?.name}</h1>
      <h1>{city?.main.temp}</h1>
      <h1>{city?.weather[0].main}</h1>
    </div>
  );
}

export default Card;
