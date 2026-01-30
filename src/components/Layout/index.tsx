import type { ReactNode } from "react";
import Navbar from "./Navbar"; 
import Footer from "./Footer";
import Hero from "../sections/team/Hero";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;