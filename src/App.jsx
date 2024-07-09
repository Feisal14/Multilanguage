import './App.css';
import Language from './components/Language';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Language />
      <Content />
      <Sidebar />
    </div>
  );
}

export default App;