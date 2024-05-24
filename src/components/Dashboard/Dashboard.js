import React from 'react';
import './Dashboard.css'
import Sidebar from '../Sidebar.jsx';
import Content from '../Content.jsx';


function Dashboard() {
  return (
    <div>
        <div className="dashboard">
          <Sidebar/>
        <div className='dashboard--content'>
          <Content/>
        </div>

      </div>
    </div>
  )
}

export default Dashboard