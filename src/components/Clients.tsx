import Marquee from "react-fast-marquee";
import Reveal from "./Reveal";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ClientType = {
  title?: string;
  image: string;
};

const clients: ClientType[] = [
  { title: "Obuasi and Iduaprem (Ghana)", image: "c1.jpg" },
  { title: "Asanko Gold Mine (Ghana)", image: "c2.jpg" },
  { title: "Ayamfuri (Ghana), Sissingue (Cote D’Ivoire)", image: "c3.jpg" },
  { image: "c4.jpg" },
  { title: "Nsuta (Ghana)", image: "c5.png" },
  { title: "Tarkwa and Damang (Ghana)", image: "c6.jpg" },
  { title: "Tongon (Cote D’Ivoire)", image: "c7.png" },
  { title: "Loulo (Mali)", image: "c8.png" },
  { title: "Syama (Mali)", image: "c9.jpg" },
  { title: "Awaso (Ghana)", image: "c10.png" },
  { title: "Akyem and Ahafo (Ghana)", image: "c11.png" },
  { image: "c13.jpg" },
  { image: "c14.png" },
  { title: "Burkina Faso", image: "c15.png" },
  { title: "Mali", image: "c16.png" },
  { title: "Bibiani Mine (Ghana)", image: "c17.png" },
];

const Clients = () => {
  return (
    <TooltipProvider>
      <section className="py-20 md:py-24">
        <div className="site-shell">
          <Reveal className="mb-10 md:mb-12">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-900/10 pb-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-main">
                Trusted partnerships
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-blu md:text-5xl">
                Our clients
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-600 md:text-right md:text-base">
              Supporting mining and mineral processing operations across Africa.
            </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Marquee
              speed={50}
              pauseOnHover={true}
              gradient={true}
              gradientWidth={100}
            >
            {clients.map((client, index) => (
              <div className="group mx-7 flex h-20 w-36 items-center justify-center" key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <img
                      src={`/client/${client.image}`}
                      alt={client.title || "Client"}
                      className="h-auto max-h-16 w-full object-contain grayscale opacity-65 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </TooltipTrigger>
                  {client.title && (
                    <TooltipContent className="bg-main p-2">
                      <div className="border-none">
                        <p>{client.title}</p>
                      </div>
                    </TooltipContent>
                  )}
                </Tooltip>
              </div>
            ))}
            </Marquee>
          </Reveal>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Clients;
