type hide = {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
  title: string;
  tecUsed: string[];
  link: string;
};

const ShowPieceLarge = ({ close, img, title, tecUsed, link }: hide) => {
  return (
    <div className="w-full md:w-[768px] lg:w-[1024px] fixed top-1/2 left-1/2 h-[450px] -translate-x-1/2 -translate-y-1/2 z-20 px-4 md:px-0">
      <div className="border-2 border-nawa-500 rounded-t-lg overflow-hidden">
        <div className="w-full h-[50px] bg-nawa-300 flex justify-end items-center px-2">
          <span
            onClick={() => close(false)}
            className="material-symbols-rounded hover:cursor-pointer"
          >
            close
          </span>
        </div>

        <div className="flex h-[400px] bg-nawa-100 p-4 md:p-0">
          <div className="w-2/3 overflow-y-auto hidden md:block">
            <img className="w-full" src={img} alt="previous work" />
          </div>

          <div className="flex-1 p-4">
            <h2 className="font-bold uppercase text-lg">{title}</h2>
            <h5 className="font-bold text-sm mt-4">tech used & features</h5>
            <ul className="list-disc list-inside mb-4">
              {tecUsed.map((tech) => {
                return <li>{tech}</li>;
              })}
            </ul>

            <a className="underline text-nawa-400 text-sm" href={link}>
              full site link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPieceLarge;
