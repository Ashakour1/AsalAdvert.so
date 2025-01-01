import Timeline from "../components/Timeline";
import HighlightedText from "../components/ui/HighlightedText";

const About = () => {
  return (
    <section>
      <div className="bg-[url(/header-image.png)] flex flex-col justify-center  h-[400px] mx-auto py-20">
        <HighlightedText
          className="border border-white text-white text-base font-medium"
          text="About Us"
        />
      </div>
      <Timeline />
    </section>
  );
};

export default About;
