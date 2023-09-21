import { useContext, useState } from 'react';
import { ItemsContext } from '../../service/ItemsContext';
import './NewItemForm.scss';

export const NewItemForm = () => {
  const [itemText, setItemText] = useState('');
  const { addNewItem } = useContext(ItemsContext);

  return (
    <form
      className='item-form'
      onSubmit={(event) => {
        event.preventDefault();
        addNewItem(itemText);
        setItemText('');
      }}
    >
      <input
        type="text"
        className="item-form-field"
        placeholder='Type name here...'
        required
        value={itemText}
        onChange={(event) => {
          setItemText(event.target.value);
        }}
      />
      <button type='submit' className="item-form-button">
        Add New
      </button>
    </form>
  )
}
