import React from 'react'
import {Link} from "react-router-dom";

const AsideBar = () => {
  return (
    <>
      <div class="fixed w-60 h-full shadow-md bg-white">
            <div class="pt-4 pb-2 px-6">
              <a href="#!">
                <div class="flex items-center">
                  <div class="shrink-0">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10" alt="Avatar"/>
                  </div>
                  <div class="grow ml-3">
                    <p class="text-sm font-semibold text-blue-600">Jason McCoel</p>
                  </div>
                </div>
              </a>
            </div>
            <hr class="my-2"/>
            <ul class="relative px-1">
              <li class="relative">
                <Link to="/dashboard" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                  <span>Dashboard</span>
                </Link>
              </li>

              <li class="relative">
                <Link to="/product" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                  <span>Product</span>
                </Link>
              </li>
              <li class="relative">
                <Link to="/order" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                  <span>Orders</span>
                </Link>
              </li>
              <hr class="my-2"/>
              <li class="relative">
                <Link to="/users" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                  <span>Users</span>
                </Link>
              </li>
              <li class="relative">
                <Link to="/reviews" class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                  <span>Reviews</span>
                </Link>
              </li>

            </ul>
     </div>
    </>
  )
}

export default AsideBar