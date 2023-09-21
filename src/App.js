import './App.scss';
import Aside from './components/Aside/Aside';
import { PageContent } from './components/PageContent/PageContent';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <Aside />
        <PageContent />
      </div>
    </div>
  );
}

export default App;
