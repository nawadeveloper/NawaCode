import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Nav from "../navigation/Nav";

const Header = () => {
  return (
    <div className="bg-nawa-500 text-nawa-100 header_gradient relative">
      <div className="display_size py-2 flex justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img width={40} height={40} src={logo} alt="N" />
            <span>NawaCode</span>
          </div>
        </Link>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
