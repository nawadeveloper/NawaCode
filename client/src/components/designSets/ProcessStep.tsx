type processProps = {
  figure: string;
  detail: string;
  title: string;
  mini_title: string;
  icon: string;
};
const ProcessStep = (props: processProps) => {
  return (
    <div className="text-nawa-200 px-6 md:px-0">
      <div className="flex gap-5 items-center mb-4">
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
      </div>
      <p className="text-justify text-white">{props.detail}</p>

      <div className="flex justify-center py-5">
        <span className="material-symbols-rounded text-9xl">
          {props.figure}
        </span>
      </div>
    </div>
  );
};

export default ProcessStep;
