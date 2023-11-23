import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-400">
        <div className="flex justify-center items-center p-4 ml-4">
          <p className="font-semibold text-lg">Sittings</p>
          <button
            type="button"
            className="text-2xl hover:drop-shadow-xl p-3 hover:bg-light-gray"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%", marginLeft: "auto" }}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className='e="font-semibold text-xl'>Theme Mode</p>
          <div className="mt-4">
            <input
              type="radio"
              id="light"
              name="theme"
              value="light"
              onChange={setMode}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light" className="ml-2">
              Light
            </label>
          </div>
          <div className="mt-4">
            <input
              type="radio"
              id="dark"
              name="theme"
              value="dark"
              onChange={setMode}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark" className="ml-2">
              Dark
            </label>
          </div>
        </div>
        <div className="p-4 border-t-1 border-color ml-4">
          <p className="font-semibold text-xl">Theme Color</p>
          <div className="flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div
                  className="relative mt-2 cursor-pointer flex gap-5 items-center"
                  key={item.name}
                >
                  <button
                    type="button"
                    className="rounded-full p-3 hover:bg-light-gray"
                    onClick={() => setColor(item.color)}
                    style={{ backgroundColor: item.color }}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
