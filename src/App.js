import './App.css';
import {Row} from './components/Row';

function App() {
  return (
    <div className="container">
      <h1>Timeline</h1>
      {Array.from(Array(5).keys()).map((_, key)=><Row key={key} />)}
    </div>
  );
}

export default App;
