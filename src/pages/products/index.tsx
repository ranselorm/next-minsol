import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import ParallaxHero from "@/components/ParallaxHero";
import ProductCard from "@/components/ProductCard";
import ProductHero from "@/components/ProductHero";
import RssFeed from "@/components/RssFeed";
import Reveal from "@/components/Reveal";

const products = [
  {
    image: "/images/gr.jpg",
    title: "Ground Support Systems",

    description:
      "We provide robust mining and ground support solutions, including  high-quality welded mesh and split set products. Our welded mesh offers superior stability and reinforcement for underground mine structures, while our split sets ensure effective ground support and stability. Both solutions are designed to enhance safety andperformance in mining operations, ensuring reliable and durable ground support in challenging environments.",
  },
  {
    image: "/images/split.jpg",
    title: "Split Sets",

    description:
      "Our Split Sets are crafted from high-tensile steel, roll-formed into a tubular section with a continuous longitudinal opening. An 8mm steel ring is fixed 5mm from the collar end of the tube. When installed into the recommended drilled hole size with the appropriate bearing plate, the Split Set creates a compressive force against the rock.",
  },
  {
    image: "/images/mesh.jpg",
    title: "Wielded Mesh",

    description:
      "Minsol manufactures and supplies Mining Mesh (Welded Mesh) for permanent surface coverage in underground excavations. This mesh can be installed with roof bolts, split sets, or other supports, and used in conjunction with combi washers and straps to enhance protection against Falls of Ground (loose rocks) and improve safety for mining crews and underground machinery.",
    description2:
      "All mesh products from Minsol are manufactured to strict ISO quality standards to meet underground mining safety specifications. The mesh is available in lengths ranging from 1m to 4.5m and widths from 1m to 2.4m. The mesh is available with wire gauges of 5.6mm and 4mm, and a cost-saving option features a combination of 5.6mm diameter main wires and 4mm diameter cross wires.otection against Falls of Ground (loose rocks) and improve safety for mining crews and underground machinery.",
  },
];

const Products = () => {
  return (
    <section>
      <ProductHero
        title="Our Products"
        subtitle="Discover comfort and efficiency with our top-quality products"
        backgroundImage="/images/ground.jpg"
      />

      <main className="bg-white py-20 md:py-24">
        <div className="site-shell">
          <Reveal className="mb-12 grid gap-10 border-b border-slate-900/10 pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 md:mb-16">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Product range</p>
              <h2 className="max-w-md text-3xl font-medium leading-tight tracking-[-0.03em] text-blu md:text-5xl">Ground support consumables.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 md:text-xl md:leading-9">
              We provide robust mining and ground support solutions, including high-quality welded mesh and split set products. Our welded mesh offers superior stability and reinforcement for underground mine structures, while our split sets ensure effective ground support and stability.
            </p>
          </Reveal>
          <Reveal>
            <ProductCard
              image={products[0].image}
              title={products[0].title}
              description={products[0].description}
              index={0}
              featured
            />
          </Reveal>

          <div className="mt-20 border-t border-slate-900/10 pt-12 md:mt-24 md:pt-16">
            <Reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-main">Related products</p>
                <h2 className="text-3xl font-medium tracking-[-0.03em] text-blu md:text-4xl">Core underground support.</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-slate-600 md:text-base">Built for reliable installation, reinforcement, and long-term protection in demanding underground environments.</p>
            </Reveal>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {products.slice(1).map((product, index) => (
                <Reveal key={product.title} delay={index * 80} className="h-full">
                  <ProductCard
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    description2={product.description2}
                    index={index + 1}
                  />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-20 border-y border-slate-900/10 py-8 md:mt-24 md:py-10">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-main">Mesh lengths</p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.02em] text-blu">1m–4.5m</p>
              </div>
              <div className="sm:border-l sm:border-slate-900/10 sm:pl-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-main">Mesh widths</p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.02em] text-blu">1m–2.4m</p>
              </div>
              <div className="sm:border-l sm:border-slate-900/10 sm:pl-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-main">Wire gauges</p>
                <p className="mt-3 text-2xl font-medium tracking-[-0.02em] text-blu">5.6mm &amp; 4mm</p>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <ParallaxHero />
      <Experience />
      <RssFeed />
      <Clients />
    </section>
  );
};

export default Products;
