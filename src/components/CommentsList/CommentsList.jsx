import './CommentsList.scss'
import { Comment } from '../Comment/Comment';

export const CommentsList = () => {
  return (
    <ul className='list'>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </ul>
  )
}