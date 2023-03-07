import React, { useContext } from "react";
import { Link } from  'react-router-dom'
import { StateContext } from "../context/ContextProvider";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';

const Navbar = () => {
  const {seletedroute,setSelectedRoute} = useContext(StateContext)
  return (
    <div className="">
      <div className="p-4 md:px-20 flex w-full justify-between bg-teal-800 text-white">
        <p className="text-2xl font-semibold">News</p>
        <input className="text-black w-2/4 rounded-lg outline-none pl-1" type="text" />
        <div className="flex sm:gap-5 gap-1">
          <TranslateOutlinedIcon />
          <AccountCircleOutlinedIcon />
        </div>
      </div>
      <div className="p-3 md:px-28 flex justify-between items-center gap-5 overflow-x-auto">
        <Link to='/'><div onClick={() => setSelectedRoute('home')} className={`${seletedroute === 'home' ? 'underline underline-offset-4' : ''}`}>Home</div></Link>
        <Link to='/world'><div onClick={() => setSelectedRoute('world')} className={`${seletedroute === 'world' ? 'underline underline-offset-4' : ''}`}>World</div></Link>
        <Link to='/bitcoin'><div onClick={() => setSelectedRoute('bitcoin')} className={`${seletedroute === 'bitcoin' ? 'underline underline-offset-4' : ''}`}>Bitcoin</div></Link>
        <Link to='/technology'><div onClick={() => setSelectedRoute('technology')} className={`${seletedroute === 'technology' ? 'underline underline-offset-4' : ''}`}>Technology</div></Link>
        <Link to='/sports'><div onClick={() => setSelectedRoute('sports')} className={`${seletedroute === 'sports' ? 'underline underline-offset-4' : ''}`}>Sports</div></Link>
      </div>
    </div>
  );
};

export default Navbar;
