import './Item.scss';
import { ItemsContext } from '../../service/ItemsContext';
import { useContext } from 'react';

export const Item = ({item}) => {
  const { removeItem, activeItem, setActiveItem } = useContext(ItemsContext);
  const {text, comments, id} = item;
  const isActive = id === activeItem;

  return (
    <li
      className={`item ${isActive ? 'active-item' : ''}`}
      onClick={(event) => {
        if(event.target.nodeName === 'BUTTON') {
          return;
        }
        setActiveItem(id)
      }}
    >
      {text}
      <span className='item-badge'>{comments.length}</span>
      <button
        type='button'
        className='item-button'
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </li>
  )
}