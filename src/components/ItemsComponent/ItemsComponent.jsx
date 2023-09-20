import './ItemsComponent.css';
import { NewItemForm } from '../NewItemForm/NewItemForm';
import { ItemsList } from '../ItemsList/ItemsList';

export function ItemsComponent() {
  return (
    <div className='items-component'>
      <h1 className='items-component-title'>
        Items
      </h1>
      <NewItemForm/>
      <ItemsList/>
    </div>
  )
}