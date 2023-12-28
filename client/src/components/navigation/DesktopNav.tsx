import { Link } from "react-router-dom";
type DesktopNavProps = {
  className: string;
};
const DesktopNav = ({ className }: DesktopNavProps) => {
  return (
    <nav className={className}>
      <Link to="/home"> home </Link>
      <Link to="/project"> project </Link>
      <Link to="/contact"> contact </Link>
      <Link to="/blog"> blog </Link>
    </nav>
  );
};

export default DesktopNav;
