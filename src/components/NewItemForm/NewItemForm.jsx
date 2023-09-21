import './NewItemForm.scss';

export const NewItemForm = () => (
  <form className='item-form'>
    <input
      type="text"
      className="item-form-field"
      placeholder='Type name here...'
      required
    />
    <button type='submit' className="item-form-button">
      Add New
    </button>
  </form>
)