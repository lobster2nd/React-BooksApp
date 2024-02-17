import { Link } from "react-router-dom";

export const Tabs = ({ tabs }) => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-500 mb-4">
      {tabs.map(({ path, title }) => (
        <li className="mr-2" key={path}>
          <Link
            to={path}
            aria-current="page"
            className="inline-block p-4 text-blue-600 bg-gray-200 rounded-t-lg hover:bg-blue-200 focus:bg-blue-200 focus:outline-none"
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
