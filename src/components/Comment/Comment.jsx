import './Comment.css';

export const Comment = () => {
  return (
    <li className='comment'>
      <div className="comment-color"/>
      <div className="comment-body">
        <pre className='comment-text'>
          Test comment
        </pre>
      </div>
    </li>
  )
}