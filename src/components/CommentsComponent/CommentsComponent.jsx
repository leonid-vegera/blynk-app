import { CommentsList } from '../CommentsList/CommentsList';
import { NewCommentForm } from '../NewCommentForm/NewCommentForm';
import './CommentsComponent.scss'

export const CommentsComponent = () => {
  return (
    <div className='comments-component'>
      <h1 className='comments-component-title'>
        Comments #15614261
      </h1>
      <CommentsList />
      <NewCommentForm />
    </div>
  )
}