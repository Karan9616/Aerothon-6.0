import React from 'react'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

import Header from './common/Header';
import Routing from './Routing';

const App = () => {
  return (
    <div>
      <Header/>
      
      <Routing/>


    </div>

  )
}

export default App