import { NavLink } from "react-router-dom"
import { navdatas } from "../data/navbar"

function Navbar() {
  return (
    <div className='w-[30%] h-full rounded-md bg-pastel-blue bg-bg-desktop bg-no-repeat bg-cover py-10'>
      <nav className="max-w-[230px] mx-auto flex flex-col gap-8">
        {navdatas.map((item, i) => (
          <NavLink key={i} className="flex items-center gap-5" to={"/"}>
            <p className="h-[40px] w-[40px] text-color-white flex justify-center items-center rounded-full border hover:bg-magnolia hover:text-black border-white">{item.id}</p>
            <div>
              <span className="uppercase text-pastel-blue font-thin">{item.title}</span>
              <h3 className="uppercase text-color-white font-medium">{item.desc}</h3>
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Navbar
