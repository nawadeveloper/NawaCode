import ProfileCard from "../designSets/ProfileCard";

const Hero = () => {
  return (
    <section className="hero py-10">
      <div className="display_size flex">
        <div className="flex-1">
          <ProfileCard />
        </div>
        <div className="flex-1 py-10">
          <div className="bg-nawa-300 p-5 md:p-10 h-full rounded-r-lg text-white">
            <h2 className="tracking-widest text-3xl font-bold">
              Your Full Stack Developer
            </h2>
            <p className="py-10 text-sm tracking-wide text-justify -z-10">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati repellendus minima blanditiis officiis labore
              perferendis amet, accusamus voluptates quia nihil enim neque
              dolores ducimus aliquam rerum provident ipsa iste nostrum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
