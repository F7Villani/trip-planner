import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './ForwardButton.css';

function ForwardButton(props){

  return(
    <div className="forward-button" onClick={props.onClick}>
        <div className="flex">
          <h2>Continuar</h2>
          <ArrowForwardIosRoundedIcon className="icon" />
        </div>
      </div>
  );
}

export default ForwardButton;