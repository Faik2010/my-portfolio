import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-7xl text-accent">
            Faik Pirinçci
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the wizard behind this portfolio
          </p>
        </div>
        
        {/* Scroll Motivation - Sağ Alt Köşe */}
        <div className="absolute bottom-16 right-12 animate-fade-in-up">
          <div className="text-right">
            <div className="text-accent text-lg mb-4 opacity-80 font-medium">
              Scroll to discover more
            </div>
            <div className="flex flex-col items-end space-y-2">
              <svg 
                className="w-8 h-8 text-accent animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <div className="text-foreground/60 text-sm">
                Explore my journey
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}