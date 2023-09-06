import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Footer } from '../Components/Footer'
import { Background } from '../Components/Background'

export const AdminDashboard = () => {
  return (
      <div>
          <Navbar />
          <Background/>
          <div className='admindashboard'>
              <div>
                  
              <h1> Admin <span className='letter-1'>Dash</span>Board</h1>
              <div><i class="fa-solid fa-star fa-lg"></i> Can Add and Edit TimeTable </div>
              <div> <i class="fa-solid fa-star fa-lg"></i> Can Fill Attendance </div>
              <div> <i class="fa-solid fa-star fa-lg"></i> Can Add New Teacher </div>
              </div>
             
          </div>
          <Footer/>
    </div>
  )
}
