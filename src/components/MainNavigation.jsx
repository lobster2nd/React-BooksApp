import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../constants";

export const MainNavigation = () => {
  return (
    <header className="flex justify-start bg-yellow-100 p-6 pl-11 text-black-100 w-full">
      <nav className="flex">
        {NAV_ITEMS.map((navItem) => (
          <div className="px-3" key={navItem.path}>
            <NavLink 
  to={navItem.path} 
  className={({ isActive }) => `transition duration-300 ease-in-out ${
    isActive ? 'text-green-400 bg-white-300' : 'text-gray-600 hover:text-blue-100'
  }`}
>
  {navItem.title}
</NavLink>
          </div>
        ))}
      </nav>
    </header>
  );
};
