import Clients from "@/components/Clients";
import ProductHero from "@/components/ProductHero";
import RssFeed from "@/components/RssFeed";
import TabbedLayout from "@/components/TabbedLayout";
import Vision from "@/components/Vision";
import Reveal from "@/components/Reveal";
import WhyMinsol from "@/components/WhyMinsol";

const About = () => {
  return (
    <section>
      <ProductHero
        title="About Us"
        subtitle="Committed to Innovation, Quality, and Customer Satisfaction"
        backgroundImage="/images/aboutus.jpeg"
      />
      <section className="bg-white py-20 md:py-24">
        <div className="site-shell">
          <Reveal>
            <div className="grid gap-10 border-b border-slate-900/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">
                  Our story
                </p>
                <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-[-0.03em] text-blu md:text-5xl">
                  Built in Ghana. Supporting the region.
                </h2>
              </div>
              <div className="space-y-6 text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                <p>
                  Founded in 2010, Minsol Limited began as a pioneering Ghanaian firm with a vision to revolutionize mining consultancy and services across the Sub-Saharan region. From our headquarters in Accra, Ghana, we quickly established a reputation for excellence and innovation within the mining industry.
                </p>
                <p>
                  Our commitment to growth and expansion led to the establishment of operational centers in Côte d&apos;Ivoire, Burkina Faso, Mali, and Guinea. These strategic locations enable us to provide enhanced support to mining operations throughout the region and respond more effectively to our clients&apos; evolving needs.
                </p>
                <p>
                  We combine industry expertise with innovative solutions to address the unique challenges of the mineral resources sector and deliver exceptional value for our clients.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
        <WhyMinsol showAboutLink={false} />
        <Vision />
        <TabbedLayout />
        <RssFeed />
        <Clients />
      </section>
    </section>
  );
};

export default About;
