import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

//use for the top position while routing from one page to another
const RouteToTop = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default RouteToTop;
