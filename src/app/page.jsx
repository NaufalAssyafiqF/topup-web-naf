import HeroSlider from "@/components/HeroSlider";
import Linebar from "@/components/Linebar";
import ListCard from "@/components/ListCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#26292b]">
      <Navbar />
      <main className="max-w-[1200px] mx-auto pb-4">
        <HeroSlider />
        <Linebar />
        <ListCard />
      </main>
      <Footer />
    </div>
  );
}
