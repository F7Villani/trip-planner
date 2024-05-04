import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';

function TripCard(props) {

  const formatOptions = { style: "currency", currency: "BRL" };
  const currencyFormatter = new Intl.NumberFormat('pt-BR', formatOptions);

  return (
    <div className="trip-card">
      <img src={props.imgUrl}></img>
      <div className='destination'>
        <PlaceRoundedIcon style={{color: "red"}} />
        <h2>{props.destination}</h2>
      </div>     
      <p>{currencyFormatter.format(props.cost)}</p>
    </div>
  );
}

export default TripCard;