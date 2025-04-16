import React from "react";
import { useNavigate } from "react-router-dom";
const Nav = () => {

    const navigate=useNavigate()
    const handleClick=()=>{
        localStorage.removeItem('token');
        navigate('/')
    }
  return (
    <div className="flex justify-end m-2 p-2 bg-slate-200 drop-shadow-md">
      <button className="bg-indigo-500 p-2 rounded" onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Nav;
