import './ItemsList.scss';
import { Item } from '../Item/Item';

export function ItemsList() {
  return (
    <ul className='list'>
      <li className='list-item'>
        Test
        <span className='list-item-badge'>0</span>
        <button type='button' className='list-item-button'>Delete</button>
      </li>
      {/*<li className='list-item'>*/}
      {/*  Test*/}
      {/*  <span className='list-item-badge'>0</span>*/}
      {/*  <button type='button' className='list-item-button'>Delete</button>*/}
      {/*</li>*/}

      <Item/>
      <Item/>
      <Item/>
    </ul>
  )
}