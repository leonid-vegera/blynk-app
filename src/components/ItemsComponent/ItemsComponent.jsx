import './ItemsComponent.scss';
import { NewItemForm } from '../NewItemForm/NewItemForm';
import { ItemsList } from '../ItemsList/ItemsList';

export const ItemsComponent = () => (
  <div className='items-component'>
    <h1 className='items-component-title'>
      Items
    </h1>
    <NewItemForm/>
    <ItemsList
    />
  </div>
)
