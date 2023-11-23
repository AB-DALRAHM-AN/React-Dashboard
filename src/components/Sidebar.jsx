import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../context/ContextProvider";
import { links } from "../data/dummy";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 text-md pl-4 pb-2.5 pt-2.5 rounded-lg text-white text-md m-2 bg-light-gray m-2 dark:text-white";
  const normalLink =
    "flex items-center gap-5 text-md pl-4 pb-2.5 pt-2.5 rounded-lg text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <>
      <div className="ml-3 h-screen md:overflow-auto overflow-auto pb-10">
        {activeMenu && (
          <>
            <div className="flex justify-between items-center">
              <Link
                to="/"
                onClick={handleCloseSideBar}
                className="items-center gap-3 flex ml-3 mt-4 text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
              >
                <SiShopware />
                <span className="text-xl font-bold">Shopfy</span>
              </Link>
              <TooltipComponent content="Menu" position="BottomCenter">
                <button
                  onClick={() =>
                    setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                  }
                  type="button"
                  className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 mr-1 bock md:hidden"
                >
                  <MdOutlineCancel />
                </button>
              </TooltipComponent>
            </div>
            <div className="mt-10">
              {links.map((link) => (
                <div key={link.title}>
                  <p className="text-gray-400 m-3 mt-4 uppercase">
                    {link.title}
                  </p>
                  {link.links.map((item) => (
                    <NavLink
                      to={`/${item.name}`}
                      key={item.name}
                      onClick={handleCloseSideBar}
                      style={({ isActive }) => ({
                        backgroundColor: isActive ? currentColor : "",
                      })}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      {item.icon}
                      <span className="capitalize">{item.name}</span>
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;
