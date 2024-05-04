import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import TodayIcon from '@mui/icons-material/Today';
import Image from 'next/image';
import './style.css';

function TripCard(props) {

  const formatOptions = { style: "currency", currency: "BRL" };
  const currencyFormatter = new Intl.NumberFormat('pt-BR', formatOptions);

  return (
    <div className="trip-card">
      <Image src={props.imgUrl}/>
      <div className='information'>
        <div className='destination'>
          <PlaceRoundedIcon style={{color: "#B8346A"}} />
          <h2>{props.destination}</h2>
        </div>
        <div className='flex'>
          <div className='departure-date'>
            <TodayIcon />
            <p>{props.departureDate}</p>
          </div>   
          <p>{currencyFormatter.format(props.cost)}</p>
        </div>
      </div>
    </div>
  );
}

export default TripCard;