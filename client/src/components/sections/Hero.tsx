import ProfileCard from "../designSets/ProfileCard";

const Hero = () => {
  return (
    <section className="hero py-11 md:py-20">
      <div className="display_size_compact flex flex-col sm:flex-row">
        <div className="flex-1 px-11 sm:px-0">
          <ProfileCard />
        </div>

        <div className="flex-1 sm:py-10 -translate-y-20 sm:-translate-y-0">
          <div className="bg-nawa-300 pt-36 p-5 sm:pt-0 md:p-10 h-full rounded-lg sm:rounded-l-none text-white grid place-items-center">
            <div>
              <h2 className="tracking-widest text-3xl font-bold">
                Your Full Stack Developer
              </h2>
              <p className="py-5 text-sm tracking-wide text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Obcaecati repellendus minima blanditiis officiis labore
                perferendis amet, accusamus voluptates quia nihil enim neque
                dolores ducimus aliquam rerum provident ipsa iste nostrum!
              </p>
            </div>

            <img src="mern.png" alt="mern_stack" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
