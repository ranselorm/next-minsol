import HeroSlider from "@/components/HeroSlider";
import Solutions from "@/components/Solutions";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";
import SolutionDetails from "@/components/SolutionDetails";
import Pillars from "@/components/Pillars";
import Clients from "@/components/Clients";
import RssFeed from "@/components/RssFeed";
import WhyMinsol from "@/components/WhyMinsol";
import OperationalFootprint from "@/components/OperationalFootprint";
import Reveal from "@/components/Reveal";

export default function Home() {
  const { openSheet } = useModal();
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const handleDialogOpen = (item: any) => {
    setSelectedItem(item);
    openSheet();
  };
  return (
    <div>
      <HeroSlider />
      <Solutions onSolutionClick={handleDialogOpen} />
      <SolutionDetails selectedItem={selectedItem} />
      <Reveal><WhyMinsol /></Reveal>
      <Reveal><OperationalFootprint /></Reveal>
      <RssFeed />
      <Pillars />
      <Clients />
    </div>
  );
}
