import MainContent from "@/components/MainContent";
import Sidebar from "@/components/SideBar";
import React from "react";
import Head from "next/head";
import { Menu, X } from "lucide-react";
import { useGlobalContext, GlobalProvider } from "@/AppContext";
import { useRouter } from "next/router"; // Add this import

const Portfolio = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();
  const router = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Head>
        <title>Hela Mylavarapu - Portfolio</title>
        <meta name="description" content="Portfolio of Hela Mylavarapu" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Portfolio Website of Hela Mylavarapu"
        />
        <meta
          property="og:description"
          content="Portfolio of Hela Mylavarapu"
        />
        <meta
          property="og:image"
          content="https://www.helllyeahh.xyz/images/footer_new.jpeg"
        />
        <meta
          property="og:url"
          content={`https://www.helllyeahh.xyz${router.asPath}`}
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 bg-white rounded-md shadow-md"
        onClick={toggleMenu}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar isOpen={isMenuOpen} onClose={toggleMenu} />
      <MainContent />
    </div>
  );
};

const WrappedPortfolio = () => (
  <GlobalProvider>
    <Portfolio />
  </GlobalProvider>
);

export default WrappedPortfolio;
