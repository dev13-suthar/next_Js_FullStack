import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import LandingBar from "./components/LandingBar";
import Particles from "./components/Particals";
import Reviews from "./components/Reviews";


export default function Home() {
  return (
    <main className="h-screen w-screen bg-black overflow-x-hidden">
        <LandingBar/>
      <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Particles quantity={200}/>
      </div>
      <div className="relative z-10 pt-4 text-white w-full">
          {/* Component Here */}
          <HeroSection/>
          <Features/>
          <Reviews/>
      </div>
    </div>
    </main>
  );
}
