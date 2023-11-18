import { navLinks} from "../constants/navLinks";
import React from 'react'
import right_arrow from '../assets/icons/right_arrow.svg'

const Menu = ({ isMenuShown, setIsMenuShown}) => {
  return (
    <div className="">
    <div className="bg-menu absolute h-full w-full top-0 left-0" onClick={() => setIsMenuShown(!isMenuShown)}>

    </div>
        <div className={`h-full w-[80%] absolute top-0  bg-logo flex flex-col justify-center items-center ${isMenuShown ? 'menu-open' : 'menu-close'}`}>
        <div className="absolute top-0 right-0 mt-10 mr-16" onClick={() => setIsMenuShown(!isMenuShown)}>
            <img src={right_arrow} alt="" width={24} height={24}/>
        </div>
        <div className=" flex flex-col gap-20 justify-center items-center">
        {navLinks.map(link => (
            <a key={link.name} href={link.link} className="text-2xl" onClick={() => setIsMenuShown(!isMenuShown)}>{link.name}</a>
        ))}
        </div>

    </div>
    </div>
  )
}

export default Menu