import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import './AddTripCard.css';

function AddTripCard(props){
    return(         
        <div onClick={props.onClick} className="card add-card shadow">
            <p>Organize sua próxima viagem</p>
            <AddCircleRoundedIcon className='add-icon'/>        
        </div>
    );
}

export default AddTripCard;