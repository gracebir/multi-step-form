import React from "react"
import Navbar from "./components/Navbar"

type prop = {
    children?: React.ReactNode
}

function Layout({children}: prop) {
  return (
    <div className="bg-color-white flex flex-row w-[55%] gap-14 mx-auto h-[65vh] p-5">
      <Navbar/>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout
