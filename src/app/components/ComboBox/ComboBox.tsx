import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';import './ComboBox.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface ComboBoxProps<T> {
  initialItem?: T;
  placeholder: string;
  items: T[];
  onItemClick: (item: T) => any;
}

function ComboBox<T>({initialItem = null, placeholder, items, onItemClick} : ComboBoxProps<T>) {

  const [item, setItem] = useState<T>(initialItem);
  const [hidden, setHidden] = useState(true);

  function handleItemClick(item: T){
    setItem(item);
    setHidden(true);
    onItemClick(item);
  }
  return (
    <div className="search-box shadow">
      <div className="row">
        <input placeholder={placeholder} autoComplete="false" type="text" value={item.toString()} readOnly={true} />
        <button onClick={(_) => setHidden(!hidden)}>
          {
            hidden ?
            <KeyboardArrowDownIcon className='search-icon'/> :
            <KeyboardArrowUpIcon className='search-icon'/>
          }
        </button>
      </div>
      <div className="result-box" hidden={hidden}>
        <ul>
          {
            items.map((item, index) => <li key={`comboBox-${index}`} onClick={() => handleItemClick(item)}>{item.toString()}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default ComboBox;