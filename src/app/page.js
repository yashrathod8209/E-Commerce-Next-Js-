import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LatestCollection from "./components/LatestCollection";
import NewsLatterBox from "./components/NewsLatterBox";
import OurPolicy from "./components/OurPolicy";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLatterBox />
      {/* <Footer /> */}
    </div>
  );
}
