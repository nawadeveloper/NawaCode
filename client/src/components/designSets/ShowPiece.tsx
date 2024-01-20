import { motion } from "framer-motion";
import { useState } from "react";
import ShowPieceLarge from "./ShowPieceLarge";

const hoverVariation = {
  hover: {
    translateY: "calc(-100% + 384px)",
  },
};

const viewVariation = {
  hover: {
    opacity: 1,
    transition: { delay: 1.5 },
  },
};

type source = {
  img: string;
  title: string;
  tecUsed: string[];
  link: string;
};

const ShowPiece = ({ img, title, tecUsed, link }: source) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="h-96 overflow-hidden border-2 border-nawa-400"
      >
        <motion.div
          className="relative cursor-pointer"
          variants={hoverVariation}
          whileHover="hover"
          transition={{ duration: 1.5 }}
        >
          <img className="w-full" src={img} alt="GK" />

          <motion.div
            className="w-full h-96 opacity-0 bg-gray-500/50 absolute bottom-0 left-0 grid place-content-center"
            variants={viewVariation}
          >
            <button className="text-3xl bg-nawa-500 py-2 px-5 text-nawa-200 rounded-md tracking-wider underline-offset-4 hover:underline">
              view
            </button>
          </motion.div>
        </motion.div>
      </div>

      {open && (
        <ShowPieceLarge
          close={setOpen}
          img={img}
          title={title}
          link={link}
          tecUsed={tecUsed}
        />
      )}
    </>
  );
};

export default ShowPiece;
