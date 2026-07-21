import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/home/Hero";
import FeaturedVideo from "@/sections/home/FeaturedVideo";
import KeyMatches from "@/sections/home/KeyMatches";
import Statistics from "@/sections/home/Statistics";
import Achievements from "@/sections/home/Achievements";
import Introduction from "@/sections/home/Introduction";
import PlayerInformation from "@/sections/home/PlayerInformation";
import Timeline from "@/sections/home/Timeline";
import Clubs from "@/sections/home/Clubs";
import Instagram from "@/sections/home/Instagram";
import Contact from "@/sections/home/Contact";

import PersonSchema from "@/components/seo/PersonSchema";

export default function Home() {
  return (
    <>
      <PersonSchema />

      <Navbar />

      <main>
        <Hero />
        <FeaturedVideo />
        <KeyMatches />
        <Statistics />
        <Achievements />
        <Introduction />
        <PlayerInformation />
        <Timeline />
        <Clubs />
        <Instagram />
        <Contact />
      </main>

      <Footer />
    </>
  );
}