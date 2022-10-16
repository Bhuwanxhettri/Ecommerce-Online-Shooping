import React from 'react'
import AsideBar from './AsideBar'
import Dashboard from './Dashboard';
import { Routes ,Route } from 'react-router-dom';
import Orders from './Orders';
import Product from './Product';
import Users from './Users';
import Reviews from './Reviews';

const Admin = () => {
  return (
    <div>
        <div className='flex gap-10'>
              <div>
                    <AsideBar/>
              </div>
              <div>
                   <Routes>
                       <Route path='/dashboard' element={<Dashboard/>} />
                       <Route path='/product' element={<Product/>} />
                       <Route path='/order' element={<Orders/>} />
                       <Route path='/users' element={<Users/>} />
                       <Route path='/reviews' element={<Reviews/>} />
                    </Routes>
              </div>
        </div>
    </div>
  )
}

export default Admin;