import './ItemsList.scss';
import { Item } from '../Item/Item';
import { useContext } from 'react';
import { ItemsContext } from '../../service/ItemsContext';

export function ItemsList() {
  const {items} = useContext(ItemsContext);

  return (
    <ul className='list'>
      {items.map(item => (
        <Item
          item={item} key={item.id}
        />
      ))}
    </ul>
  )
}
