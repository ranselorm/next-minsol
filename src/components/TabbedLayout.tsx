import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Reveal from "./Reveal";

type Member = {
  name: string;
  position: string;
  details?: string;
};

type Committees = {
  [key: string]: Member[];
};

const committees: Committees = {
  "Senior Management": [
    {
      name: "Yaw Boadi",
      position: "Managing Director",
      details:
        "Yaw is the founder and managing director of Minsol Limited, a mining services firm specializing in the West African region. He has a degree in metallurgical engineering from the Kwame Nkrumah University of Science and Technology. With a wealth of experience exceeding 30 years, Mr. Boadi has navigated various facets of the mining business ranging from managing operations, projects regulatory, to business development. His journey has led to the establishment of important connections with government and corporate stakeholders.",
    },
    {
      name: "Theo Abuah",
      position: "Head of Operations",
      details:
        "Mr Abuah is a Mining and Mineral Engineer by profession with over 30yrs experience in the mineral industry.  Theo holds a MSc (mining), Dip (Mineral Technology) and Certificate in Project Management. He has worked with Goldfields Gh Ltd, AngloGold Ashanti Bibiani mine; currently Mensin Gold (a subsidiary of Asante gold). A member of the Minsol team since 2015, Theo has assisted and led multinational companies as their representative in Ghana and West Africa. Some notable examples include: Polycorp (Canada), Gekko System (Australia) and West African Forging Ltd. He is currently assisting with business development post-establishment of West Africa Conveyor Ltd (WACO); the only indigenous conveyor and Underground Support System manufacturer.",
    },
    {
      name: "Isaac Adusei",
      position: "Head of Finance",
      details:
        "Mr Adusei is a Finance Professional with over 30 years of post-qualification experience. This experience has spanned many industries, including mining, fast-moving consumer goods, textiles, and breweries. In all these places, he functioned as Head of Accounts with responsibilities covering reporting, budgeting, and treasury.",
    },
  ],
  "Administrative & Technical": [
    {
      name: "Ananth Achary",
      position: "Foundry Plant Manager",
      details:
        "Mr Achary has over 17 years of experience in marketing, planning, production, quality and, sales management within the foundry industry. During this period, he has been an implementer of the six sigma and 5S methodologies which are used to improve business and reduce the wastage in production process. Mr Achary’s experience has seen in work in various foundries in Ghana and India. He will serve as the first plant manager of the Minsol foundry.",
    },
    {
      name: "Augustine Nuamah",
      position: "Finance & Administration Executive",
    },
    { name: "Alex Owusu", position: "Operations" },
    { name: "Benedicta Cobbah", position: "HSE Supervisor" },
    { name: "David Peasah", position: "Operations" },
    { name: "Edward Sowah", position: "Human Resources Manager" },
    { name: "Emmanuel Ocran", position: "Group Mechanical Engineer" },
    { name: "Emmanuel K. Arthur", position: "Technical Sales Engineer" },
    {
      name: "Yaw Boateng",
      position: "Operations & Finance Executive Logistics",
    },
  ],
  // Administration: [
  //   { name: "Carlos F. Cáceres Contreras", position: "President" },
  //   { name: "Cristóbal Eyzaguirre Baeza", position: "Vicepresident" },
  //   { name: "Alfonso Swett Saavedra", position: "Director" },
  //   { name: "Alfonso Swett Saavedra", position: "Director" },
  //   { name: "Fernando Franke García", position: "Director" },
  //   { name: "Rolando Medeiros Soux", position: "Board Advisor" },
  // ],
};

const TabbedLayout: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Senior Management");
  const isLeadership = selectedTab === "Senior Management";

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="site-shell">
        <Reveal className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-main">Our people</p>
            <h2 className="text-3xl font-medium tracking-[-0.03em] text-blu md:text-5xl">The team behind Minsol.</h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600 md:text-base">Experienced technical, operational, and administrative professionals working across the region.</p>
        </Reveal>
        <div className="mb-8 flex flex-wrap gap-2 border-b border-slate-900/10 pb-5 md:mb-10">
          {Object.keys(committees).map((tab) => (
            <button
              key={tab}
              className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
                selectedTab === tab
                  ? "bg-main text-white"
                  : "text-slate-600 hover:bg-accent hover:text-blu"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`grid grid-cols-1 ${isLeadership ? "md:grid-cols-3" : "gap-x-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`}
        >
          {committees[selectedTab]?.map((member, index) => (
            <Card
              key={member.name}
              member={member}
              index={index}
              isLast={index === committees[selectedTab].length - 1}
              variant={isLeadership ? "leadership" : "directory"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TabbedLayout;
