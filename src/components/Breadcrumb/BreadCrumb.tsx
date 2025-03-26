import { Link, useLocation } from "react-router-dom";

export default function BreadCrumb() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path); // Remove empty values

  return (
    <nav className="flex space-x-2 text-gray-600">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      {paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;

        return (
          <span key={url} className="flex items-center">
            <span className="mx-1">/</span>
            {!isLast ? (    
              <Link to={url} className="hover:underline">
                {path}
              </Link>
            ) : (
              <span className="text-gray-800 font-semibold">{path}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
