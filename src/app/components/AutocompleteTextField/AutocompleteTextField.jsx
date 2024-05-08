import { useState } from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import useDebounce from '../../utils/useDebounce';
import './AutocompleteTextField.css';

function AutocompleteTextField(props) {

  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([]);
  const getItemsDebounced = useDebounce(getItems, 1000);

  function onChangeText(event){
    setSearchText(event.target.value);
    getItemsDebounced();
  }

  function handleItemClick(item){
    setSearchText(props.itemToString(item));
    setItems([]);
    props.handleItemClick(item);
  }

  async function getItems(){
    const items = await props.getItems(searchText);
    setItems(items);
  }

  return (
    <div className="search-box">
      <div className="row">
        <input autoComplete="false" type="text" value={searchText} onChange={onChangeText} />
        <button>
          <SearchRoundedIcon className='search-icon' />
        </button>
      </div>
      <div className="result-box" hidden={items.length === 0}>
        <ul>
          {
            items.map((item, index) => <li key={`item-${index}`} onClick={() => handleItemClick(item)}>{props.itemToString(item)}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default AutocompleteTextField;