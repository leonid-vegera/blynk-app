import './Item.css';

export const Item = () => {
  return (
    <li className='item active-item'>
      Test Item
      <span className='item-badge'>0</span>
      <button type='button' className='item-button'>Delete</button>
    </li>
  )
}