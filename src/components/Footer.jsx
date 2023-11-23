import React from 'react';
import { useStateContext } from '../context/ContextProvider';


const Footer = () => {
  const { currentColor } = useStateContext();
  return (
    <div>
        <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © 2023 All rights reserved by <span style={{color: currentColor, fontSize: "20px", fontWeight: "bold"}}><a href="https://abdalrhman.me">A.A.A</a></span>
    </p>
  </div>
    </div>
  );
}

export default Footer;