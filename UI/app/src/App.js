
import './App.css';
import UploaderBox from './component/UploaderBox';
import {Triangle} from './GL/BasicProperty';
function App() {
  return (
    <div className="App">
      <canvas id="canvas" width={500} height={500} style={
        {
          border: '1px solid #000',
          margin: '10px auto',
          display: 'block',
          background: '#ffd0d0'
        }
      }>canvas</canvas>
        
        <UploaderBox />
    </div>
  );
}

export default App;
