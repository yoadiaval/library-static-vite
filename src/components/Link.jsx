import classNames from "classnames";
import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Link({ children, to, className, activeClassName }) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(
    "text-amber-400",
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a onClick={handleClick} className={classes} href={to}>
      {children}
    </a>
  );
}

export default Link;
