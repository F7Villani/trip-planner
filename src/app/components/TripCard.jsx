function TripCard(props) {

  const formatOptions = { style: "currency", currency: "BRL" };
  const currencyFormatter = new Intl.NumberFormat('pt-BR', formatOptions);

  return (
    <div className="trip-card">
      <img src={props.imgUrl}></img>
      <h2>{props.destination}</h2>
      <p>{currencyFormatter.format(props.cost)}</p>
    </div>
  );
}

export default TripCard;