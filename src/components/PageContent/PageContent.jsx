import { ItemsComponent } from '../ItemsComponent/ItemsComponent';
import { CommentsComponent } from '../CommentsComponent/CommentsComponent';
import './PageContent.scss';

export const PageContent = () => (
  <div className="page">
    <div className="page-container">
      <div className="page-content-wrapper">
        <ItemsComponent />
        <CommentsComponent />
      </div>
    </div>
  </div>
)
