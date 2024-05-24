import React from 'react';
import '../style/content.css';

function Content() {
   

    
  
  
    return (
   <main className='main-container'>
        <div className='main-title'>
            <h2>Dashboard</h2>
        </div>

        <div className='main-cards'>
            <div className='card'>
            <div className='card-inner'>  
               <h3>Engagement rate</h3>

            </div>
            <h2>23.4%</h2>
            </div>
           
         

            <div className='card'>
             <div className='card-inner'>  
                <h3>Session</h3>

              </div>
              <h2>755</h2>
           </div>

            <div className='card'>
             <div className='card-inner'>  
               <h3>New Users</h3>

             </div>
             <h2>841</h2>
            </div>

            <div className='card'>
             <div className='card-inner'>  
               <h3>Average Engagement Time</h3>

             </div>
             <h2>00:15:34</h2>
            </div>
        </div>    


      
   </main>
  )
}

export default Content