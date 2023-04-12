import React from 'react'
import { Outlet } from 'react-router-dom-v5-compat'

export const Navbar = () => {
  return (
    <>
      <nav>
        <section>
          <h1>Redux Essentials Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  )
}
