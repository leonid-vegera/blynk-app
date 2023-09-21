import './Comment.scss';

export const Comment = ({ comment }) => {
  const { commentText } = comment;

  return (
    <li className='comment'>
      <div className="comment-color" style={{ backgroundColor: comment.color }}/>
      <div className="comment-body">
        <pre className='comment-text'>
          {commentText}
        </pre>
      </div>
    </li>
  )
}
