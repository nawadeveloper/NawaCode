import ArrowSvg from "./ArrowSvg";

const ArrowSetting = () => {
  return (
    <>
      <div className="md:flex items-end hidden">
        <ArrowSvg side="right" />
      </div>

      <div className="md:flex items-end justify-end hidden">
        <ArrowSvg side="left" />
      </div>

      <div className="flex justify-center items-center md:hidden">
        <ArrowSvg side="down" />
      </div>
    </>
  );
};

export default ArrowSetting;
