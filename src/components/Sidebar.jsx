import React, { useState } from "react";
import { BiSolidChevronLeftSquare } from "react-icons/bi";
import { GiDeliveryDrone } from "react-icons/gi";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RiStore3Fill } from "react-icons/ri";
import Logo from "/img/logoheliboss.svg";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const Menu = [
    { title: "Drones 1" },
    { title: "Drones 2" },
    { title: "Drones 3", spacing: true, icon: <RiStore3Fill /> },
    {
      title: "DJI Air",
      submenu: true,
      submenuItems: [{ title: "Submenu1" }, { title: "Submenu2" }],
    },
    { title: "Drones 4" },
    { title: "Drones 5" },
    { title: "Drones 6", spacing: true },
  ];

  return (
    <aside
      className={`bg-gray-700 h-screen p-4 pt-8 ${
        open ? "w-[280px]" : "w-[70px]"
      } relative duration-300`}
    >
      <BiSolidChevronLeftSquare
        onClick={() => setOpen(!open)}
        className={`text-white text-3xl rounded-full absolute -right-3 top-9  cursor-pointer ${
          !open && "rotate-180"
        }`}
      />
      <div className="flex flex-col w-full justify-start items-start">
        <Link>
          <img
            src={Logo}
            alt=""
            className={`duration-300 ${!open && "scale-0"}`}
          />
          <GiDeliveryDrone
            className={`text-4xl duration-500 w-full ${
              open && "rotate-[360deg]"
            }`}
          />
        </Link>
      </div>

      {/* Search bar */}
      <div
        className={`${
          !open ? "px-2.5" : "px-4"
        } flex items-center rounded-md mt-6 px-4 py-2 relative`}
      >
        <BiSearch className={`${open && "mr-2"} text-2xl`} />
        <input
          type="search"
          placeholder="Buscar..."
          className={`${
            !open && "hidden"
          } text-base bg-transparent w-full text-red-500 focus:outline-none`}
        />
      </div>

      {/* Nav Sidebar */}

      <ul className="pt-2">
        {Menu.map((menu, index) => (
          <>
            <li
              key={index}
              className={`${
                menu.spacing ? "mt-9" : "mt-2"
              } text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-black rounded-md mt-2`}
            >
              <span className="text-2xl flex">
                {menu.icon ? menu.icon : <BiSearch />}
              </span>
              <Link
                className={`${
                  !open && "hidden"
                } text-gray-300 flex-1 flex justify-between `}
              >
                <span>{menu.title}</span>
                {menu.submenu && open && (
                  <BiChevronDown
                    onClick={() => setSubMenuOpen(!subMenuOpen)}
                    className={`${
                      subMenuOpen && "rotate-180"
                    } text-2xl duration-300`}
                  />
                )}
              </Link>
            </li>
            {menu.submenu && subMenuOpen && open && (
              <ul className="">
                {menu.submenuItems.map((submenuItems, index) => (
                  <li
                    key={index}
                    className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-black rounded-md mt-2"
                  >
                    {submenuItems.title}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
