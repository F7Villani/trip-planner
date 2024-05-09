import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import './PlaceCard.css';

function PlaceCard(props) {

  return (
    <div className="card place-card shadow">
      <img src={props.place.urlPhoto} alt={props.place.city + 'photo'} />
      <div className='information'>
        <div className='country'>
          <PlaceRoundedIcon className='icon' style={{ color: "#B8346A" }} />
          <h2>{props.place.country}</h2>
        </div>
        <h3>{props.place.city}</h3>
      </div>
    </div>
  );
}

export default PlaceCard;