import { motion } from "framer-motion";

type processProps = {
  figure: string;
  detail: string;
  title: string;
  mini_title: string;
  icon: string;
};

const parentVariations = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      staggerChildren: 0.5,
      staggerDirection: 1,
    },
  },
};

const titleVariations = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const miniTitleVariations = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const figureVariations = {
  initial: { scale: 0 },
  animate: { scale: 1 },
};

const ProcessStep = (props: processProps) => {
  return (
    <motion.div
      variants={parentVariations}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.8 }}
      className="text-nawa-200 px-6 md:px-0"
    >
      <motion.div
        variants={titleVariations}
        className="flex gap-5 items-center mb-4"
      >
        <div className="w-14 h-14 bg-nawa-100 rounded-full grid place-items-center">
          <span className="material-symbols-rounded text-nawa-400 text-3xl">
            {props.icon}
          </span>
        </div>
        <div>
          <h3 className="uppercase text-3xl tracking-wider font-ultra">
            {props.title}
          </h3>
          <span className="block text-nawa-100 italic text-end -mt-2">
            {props.mini_title}
          </span>
        </div>
      </motion.div>
      <motion.p
        variants={miniTitleVariations}
        className="text-justify text-white"
      >
        {props.detail}
      </motion.p>

      <motion.div
        variants={figureVariations}
        className="flex justify-center py-5"
      >
        <span className="material-symbols-rounded text-9xl">
          {props.figure}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ProcessStep;
