import React from 'react';
import Cars from './component/Cars'
import { useSelector } from 'react-redux';

function App() {
  const audi  = useSelector(state=>state.cars);

  return (
    
    <div className="App">
      <Cars />
     {console.log(audi)}
    </div>
  );
}

export default App;
