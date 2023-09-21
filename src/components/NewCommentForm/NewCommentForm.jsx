import { useContext, useState } from 'react';
import { ItemsContext } from '../../service/ItemsContext';
import './NewCommentForm.scss';

export const NewCommentForm = () => {
  const {addNewComment} = useContext(ItemsContext);
  const [commentText, setCommentText] = useState('');
  const [commentColor, setCommentColor] = useState('#000000');
  return (
    <form
      className="comment-form"
      onSubmit={(event) => {
        event.preventDefault();
        addNewComment(commentText, commentColor);
        setCommentText('');
        setCommentColor('#000000');
      }}
    >
      <input
        type="color"
        className="comment-form-control"
        placeholder='Type comment here...'
        value={commentColor}
        onChange={(event) => {
          setCommentColor(event.target.value);
        }}
      />
      <textarea
        className="comment-form-textarea"
        placeholder='Type comment here...'
        required
        value={commentText}
        onChange={(event) => {
          setCommentText(event.target.value)
        }}
      ></textarea>
      <button type='submit' className="comment-form-button">
        Add New
      </button>
    </form>
  )
}
