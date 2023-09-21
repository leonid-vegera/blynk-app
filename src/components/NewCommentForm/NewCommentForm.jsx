import './NewCommentForm.scss';

export const NewCommentForm = () => {
  return (
    <form className="comment-form">
      <input
        type="color"
        className="comment-form-control"
        placeholder='Type comment here...'
      />
      <textarea
        className="comment-form-textarea"
        placeholder='Type comment here...'
        required
      ></textarea>
      <button type='submit' className="comment-form-button">
        Add New
      </button>
    </form>
  )
}