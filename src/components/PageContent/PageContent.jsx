import { ItemsComponent } from '../ItemsComponent/ItemsComponent';
import { CommentsComponent } from '../CommentsComponent/CommentsComponent';
import './PageContent.css';

export const PageContent = () => {
  return (
    <div className="page">
      <div className="page-container">
        <div className="page-content-wrapper">
          <ItemsComponent/>
          <CommentsComponent/>
        </div>
      </div>
    </div>
  )
}