import ShowPiece from "../designSets/ShowPiece";
import { motion } from "framer-motion";

const parentVariations = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      // duration: 2,
      staggerChildren: 0.5,
    },
  },
};

const ShowCase = () => {
  return (
    <section className="display_size py-20">
      <h1 className="text-center font-bold tracking-wider text-nawa-500 text-3xl mb-5">
        Past Works
      </h1>
      <motion.div
        variants={parentVariations}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projectData.map((data) => {
          return (
            <ShowPiece
              key={data.img}
              img={data.img}
              title={data.title}
              link={data.link}
              tecUsed={data.tecUsed}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

const projectData = [
  {
    img: "gorkhali_kitchen.png",
    title: "Gorkhali Kitchen",
    link: "",
    tecUsed: ["React", "TailwindCss"],
  },

  {
    img: "gorkhali_kitchen_mobile.png",
    title: "Gorkhali Kitchen Mobile",
    link: "",
    tecUsed: ["React", "TailwindCss"],
  },
  {
    img: "yuwa_collection.png",
    title: "Yuwa collection Store",
    link: "",
    tecUsed: ["React", "TailwindCss", "express.js", "mongoDb"],
  },

  {
    img: "yuwa_collection_mobile.png",
    title: "Yuwa collection Store Mobile",
    link: "",
    tecUsed: ["React", "TailwindCss", "express.js", "mongoDb"],
  },
];

export default ShowCase;
