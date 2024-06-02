import { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import useDebounce from '../../hooks/useDebounce';
import './AutocompleteTextField.css';

interface AutocompleteTextFieldProps<T> {
  initialItem: T;
  placeholder: string;
  getItems: (text: string) => Promise<T[]>;
  onItemClick: (item: T) => any;
  delay: number;
}

function AutocompleteTextField<T>(props : AutocompleteTextFieldProps<T>) {

  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([]);
  const getItemsDebounced = useDebounce(getItems, props.delay);

  function handleChangeText(event){
    setSearchText(event.target.value);
    getItemsDebounced();
  }

  function handleItemClick(item: T){
    setSearchText(item.toString());
    setItems([]);
    props.onItemClick(item);
  }

  async function getItems(){
    const items = await props.getItems(searchText);
    setItems(items);
  }

  return (
    <div className="search-box shadow">
      <div className="row">
        <input placeholder={props.placeholder} autoComplete="false" type="text" value={searchText} onChange={handleChangeText} />
        <button>
          <SearchRoundedIcon className='search-icon' />
        </button>
      </div>
      <div className="result-box" hidden={items.length === 0}>
        <ul>
          {
            items.map((item, index) => <li key={`autoCompleteTextFieldItem-${index}`} onClick={() => handleItemClick(item)}>{item.toString()}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default AutocompleteTextField;