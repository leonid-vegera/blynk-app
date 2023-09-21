import { CommentsList } from '../CommentsList/CommentsList';
import { NewCommentForm } from '../NewCommentForm/NewCommentForm';
import './CommentsComponent.scss'
import { useContext } from 'react';
import { ItemsContext } from '../../service/ItemsContext';

export const CommentsComponent = () => {
  const { activeItem } = useContext(ItemsContext);

  return (
    <div className='comments-component'>
      <h1 className='comments-component-title'>
        Comments #{activeItem}
      </h1>
      <CommentsList/>
      <NewCommentForm/>
    </div>
  )
}