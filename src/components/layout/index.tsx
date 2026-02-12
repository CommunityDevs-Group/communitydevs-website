import type { ReactNode } from "react";
import Navbar from "./Navbar"; 
import Footer from "./Footer/index"; 
import Hero from "../sections/team/Hero";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;