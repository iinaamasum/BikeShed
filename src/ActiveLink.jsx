import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const ActiveLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
      <div
        className={`${
          match
            ? 'border-b-2 text-white bg-[#21759B] rounded px-2 font-bold hover:text-white'
            : 'no-underline'
        }`}
      >
        <Link to={to} {...props}>
          {children}
        </Link>
      </div>
    </>
  );
};

export default ActiveLink;
