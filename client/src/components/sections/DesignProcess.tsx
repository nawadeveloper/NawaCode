import ArrowSetting from "../designSets/ArrowSetting";
import ProcessStep from "../designSets/ProcessStep";
import ArrowSvg from "../designSets/ArrowSvg";

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

        <ArrowSetting />

        <ProcessStep
          icon="Web"
          figure="code"
          title="frontend"
          mini_title="compability"
          detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsam obcaecati cumque architecto ut, mollitia fugit hic, accusamus modi deleniti nobis distinctio quis optio iste aliquid, saepe perspiciatis maiores similique."
        />

        <div className="flex justify-center items-center md:hidden">
          <ArrowSvg side="down" />
        </div>

        <ProcessStep
          icon="lock"
          figure="encrypted"
          title="backend"
          mini_title="secure"
          detail="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsam obcaecati cumque architecto ut, mollitia fugit hic, accusamus modi deleniti nobis distinctio quis optio iste aliquid, saepe perspiciatis maiores similique."
        />
        <ArrowSetting />

        <ProcessStep
          icon="manage_accounts"
          figure="folder_managed"
          title="deploy"
          mini_title="reliable"
          detail="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui asperiores dolorum natus repellat laudantium quod earum voluptatibus modi adipisci alias consequatur culpa molestias, laborum dolorem, ipsa tenetur omnis pariatur ipsam."
        />
      </div>
    </div>
  );
};

export default DesignProcess;
