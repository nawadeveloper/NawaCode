import { Link } from "react-router-dom";
import { motion } from "framer-motion";
type NavLinksProps = {
  className: string;
  mobileView?: boolean;
};

const navAnimationVar = {
  initial: {
    opacity: 0,
    //  scaleY: 0
  },
  open: {
    opacity: 1,
    // scaleY: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
  closed: {
    opacity: 0,
    // scaleY: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
};

const linkAnimationVar = {
  initial: {
    y: -20,
  },
  open: {
    y: 0,
  },

  closed: {
    y: 20,
  },
};

const NavLinks = ({ className, mobileView }: NavLinksProps) => {
  if (mobileView) {
    return (
      <motion.nav
        key={"mobile_nav_menu"}
        initial={"initial"}
        animate={"open"}
        exit={"closed"}
        variants={navAnimationVar}
        className={className}
      >
        <motion.div variants={linkAnimationVar} key="/home">
          <Link to="/">home</Link>
        </motion.div>
        <motion.div variants={linkAnimationVar} key="/project">
          <Link to="/project">project</Link>
        </motion.div>
        <motion.div variants={linkAnimationVar} key="/contact">
          <Link to="/contact">contact</Link>
        </motion.div>
        <motion.div variants={linkAnimationVar} key="/blog">
          <Link to="/blog">blog</Link>
        </motion.div>
      </motion.nav>
    );
  }
  return (
    <nav className={className}>
      <Link to="/">home</Link>
      <Link to="/project">project</Link>
      <Link to="/contact">contact</Link>
      <Link to="/blog">blog</Link>
    </nav>
  );
};

export default NavLinks;
