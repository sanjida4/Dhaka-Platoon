import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DhakaPlatoon from './componenents/DhakaPlatoon/DhakaPlatoon';


function App() {
  return (
    <div className="App">
       <h1 className="m-5">Dhaka Platoon squad</h1>
       <DhakaPlatoon></DhakaPlatoon>
    </div>
  );
}

export default App;
