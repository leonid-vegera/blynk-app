import { Comment } from '../Comment/Comment';
import { useContext } from 'react';
import { ItemsContext } from '../../service/ItemsContext';

export const CommentsList = () => {
  const { items, activeItem } = useContext(ItemsContext);
  const comments = items.find(item => item.id === activeItem)?.comments || [];

  return (
    <ul className='list'>
      {comments.map(comment => (
        <Comment key={comment.commentId} comment={comment}/>
      ))}
    </ul>
  )
}