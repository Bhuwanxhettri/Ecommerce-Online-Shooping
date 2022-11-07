import React from "react"
import { Link } from "react-router-dom"
import { useSelector} from 'react-redux'
const Search = () => {
  const CartItem = useSelector((state) => state.cart.cartItem)
  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
              <h1 className="text-center"> <span className="text-red-600 text-2xl mx-2">Online</span>shooping</h1>
          </div>

          <div className='icon f_flex width'>
            <Link to="/login"><i className='fa fa-user icon-circle cursor-pointer'></i></Link>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
