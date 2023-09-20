// import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside/Aside';
import { PageContent } from './components/PageContent/PageContent';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <Aside />
        <PageContent />
      </div>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
