import MainContent from "@/components/MainContent";
import Sidebar from "@/components/SideBar";
import React from "react";
import Head from "next/head";
import { Menu } from "lucide-react";
import { useGlobalContext, GlobalProvider } from "@/AppContext";
import MasonryGrid from "@/components/MasonryGrid";

const Play = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Head>
        <title>Hela Mylavarapu - Photo Gallery</title>
        <meta name="description" content="Portfolio of Hela Mylavarapu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded-md shadow-md"
        onClick={toggleMenu}
      >
        <Menu size={24} />
      </button>

      {/* <div className="flex flex-grow"> */}
      <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />

      <MasonryGrid />
      {/* </div> */}
    </div>
  );
};

const WrappedPortfolio = () => (
  <GlobalProvider>
    <Play />
  </GlobalProvider>
);

export default WrappedPortfolio;
