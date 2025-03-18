import React from 'react';
import './styles/App.css';
import { NavigationHeader } from './components/NavigationHeader';

function App() {
  return (
    <React.Fragment>
      <NavigationHeader />
      <div className="TodoBoard_content">
        ...
      </div>
    </React.Fragment>
  );
}

export default App
