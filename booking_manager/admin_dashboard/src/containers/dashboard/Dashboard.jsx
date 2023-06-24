import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router' // Import Switch from 'react-router' instead of 'react-router-dom'

import Bookings from '../bookings/Bookings'

const Dashboard = () => {
  return (
    <Router>
      <div className='dashboard-container'>
        <div className='sidebar'>
          <div className='sidebar-header'>Admin Dashboard</div>
          <ul className='sidebar-menu'>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/bookings'>Bookings</Link>
              <ul className='sub-menu'>
                <li>
                  <Link to='/bookings/list'>Bookings</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='main-content'>
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/bookings' component={Bookings} />
          <Route path='/bookings/list' component={Bookings} />
        </div>
      </div>
    </Router>
  )
}
export default Dashboard
