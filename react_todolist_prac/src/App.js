import './index.css';
import React from 'react'
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

/* import React from 'react'; 
import Home from './pages/Home'; // 추후에 기능이 고도화되면 라우팅하여 여러개의 페이지를 관리 
const App = () => <Home />; 
export default App; */
