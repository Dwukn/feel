import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Navbar />
     <div className="h-screen">
     <Hero />
     <About />
     <Contact />
     <Footer />
     </div>
    </div>
  );
}
