import ArrowSvg from "../designSets/ArrowSvg";
import ProcessStep from "../designSets/ProcessStep";

const DesignProcess = () => {
  return (
    <div className="bg-nawa-400 py-24">
      <div className="display_size grid grid-cols-1 md:grid-cols-2 gap-11">
        <ProcessStep
          icon="stylus_note"
          figure="important_devices"
          title="design"
          mini_title="responsive"
          detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsam obcaecati cumque architecto ut, mollitia fugit hic, accusamus modi deleniti nobis distinctio quis optio iste aliquid, saepe perspiciatis maiores similique."
        />

        <div className="md:flex items-end hidden">
          <ArrowSvg side="right" />
        </div>

        <div className="md:flex items-end justify-end hidden">
          <ArrowSvg side="left" />
        </div>

        <div className="flex justify-center items-center md:hidden">
          <ArrowSvg side="down" />
        </div>

        <ProcessStep
          icon="stylus_note"
          figure="important_devices"
          title="design"
          mini_title="responsive"
          detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsam obcaecati cumque architecto ut, mollitia fugit hic, accusamus modi deleniti nobis distinctio quis optio iste aliquid, saepe perspiciatis maiores similique."
        />
      </div>
    </div>
  );
};

export default DesignProcess;
