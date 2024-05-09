import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import TodayIcon from '@mui/icons-material/Today';
import './TripCard.css';

function TripCard(props) {

  const formatOptions = { style: "currency", currency: "BRL" };
  const currencyFormatter = new Intl.NumberFormat('pt-BR', formatOptions);

  return (
    <div className="card trip-card shadow">
      <img src={props.imgUrl}></img>
      <div className='information'>
        <div className='country'>
          <PlaceRoundedIcon className='icon' style={{color: "#B8346A"}} />
          <h2>{props.destination.country}</h2>
        </div>
        <h3>{props.destination.city}</h3>
        <div className='flex'>
          <div className='departure-date'>
            <TodayIcon className='icon' />
            <p>{props.departureDate}</p>
          </div>   
          <p>{currencyFormatter.format(props.cost)}</p>
        </div>
      </div>
    </div>
  );
}

export default TripCard;