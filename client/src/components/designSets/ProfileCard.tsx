import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden profile_card z-10 relative">
      <div className="h-80 bg-gray-200 curve">
        {/* <img
          className="w-full h-full object-cover"
          src="/profile_pic.png"
          alt="Nawaraj Bista"
        /> */}
      </div>
      <div className="text-center py-4">
        <h2 className="font-bold text-lg text-nawa-500 uppercase">
          Nawaraj Bista
        </h2>
        <h4 className="text-xs text-nawa-300 tracking-wider">
          Full Stack Developer
        </h4>

        <div className="py-4 flex gap-5 text-2xl text-nawa-500 justify-center">
          <FaFacebook />
          <FaXTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      <div className="bg-nawa-200 font-bold text-center text-nawa-400 py-2 divide-x-4 flex">
        <Link to="/project" className="flex-1">
          View Work
        </Link>
        <Link to="/contact" className="flex-1">
          contact
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
