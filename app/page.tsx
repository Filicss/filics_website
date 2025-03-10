import Profile from "@/components/Profile";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import HireMeSection from "@/components/HireMe";
import NextProject from "@/components/NextProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import navItems from "@/data/navItems";



export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5" >
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <HireMeSection/>
        <Profile/>
        <NextProject/>
        <Footer/>
      </div>
    </main>
  );
}
