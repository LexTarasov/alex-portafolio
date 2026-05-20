import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";
import codeGirl from "../../../assets/animated-code-girl-gif.gif";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle title="About me" />

        <div className="flex flex-col md:flex-row gap-12 md:items-start">
          <ScrollReveal delay={0}>
            <div className="md:w-[55%] text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a software developer with experience building applications
                end to end — from backend APIs and authentication systems to
                React interfaces. I'm currently focused on deepening my
                understanding of software architecture and system design.
              </p>
              <p>
                I work at Nexierge, where I've built full product sections using
                Xano, Stripe, and React. I like understanding how things work at
                every layer of the stack.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="w-full md:w-[380px]">
              <img
                src={codeGirl}
                alt="Alexandra coding"
                className="rounded-xl w-full h-auto block"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
