import React from "react"
import Navbar from "./components/Navbar"

type prop = {
    children?: React.ReactNode
}

function Layout({children}: prop) {
  return (
    <div className="bg-color-white max-w-7xl flex flex-col lg:flex-row lg:w-[70%] mx-auto h-[70vh] p-5">
      <Navbar/>
      <div>
        {children}
      </div>
      <div>

      </div>
    </div>
  )
}

export default Layout
