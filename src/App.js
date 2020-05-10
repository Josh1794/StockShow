import React from 'react';
import { Navbar } from './components';
import Routes from './routes';
import '../public/styles.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
