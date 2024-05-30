import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import './ForwardButton.css';

interface ForwardButtonProps {
  onClick: () => void;
}

function ForwardButton({onClick}: ForwardButtonProps) {

  return (
    <div className="forward-button" onClick={onClick} >
      <div className="flex">
        <h2>Continuar</h2>
        <ArrowForwardIosRoundedIcon className="icon" />
      </div>
    </div>
  );
}

export default ForwardButton;