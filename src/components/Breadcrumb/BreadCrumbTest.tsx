import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbTest() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((p) => p); // Ensure array

  return (
    <nav>
      <Link to="/">Home</Link>
      {paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join("/")}`;
        const isLast = index === paths.length - 1;

        return (
          <span key={url}>
            <span> / </span>
            {isLast ? (
              <span className="font-bold">{path}</span>
            ) : (
              <Link className="text-gray-600 hover:text-sky-500" to={url}>
                {path}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
