import Image from "next/image";
import Header from "@/components/Header";
import SearchEngine from "@/components/SearchEngine";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import HomeAbout from "@/components/HomeAbout";
import HomeDetails from "@/components/HomeDetails";
import TopDestinations from "@/components/TopDestinations";
import CustomerHelp from "@/components/CustomerHelp";

export default function Home() {
  return (
    <>
      <Header />
      <SearchEngine />
      <CustomerHelp />

      <TopDestinations />
      <HomeAbout />
      <Packages />
      <HomeDetails />

      <Footer />

      {/*




      {/* <Blog/> 
      */}
    </>
  );
}
