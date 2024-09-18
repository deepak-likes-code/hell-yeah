import React, { useState } from "react";
import Head from "next/head";
import { Menu } from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <Head>
        <title>Hela Mylavarapu - Portfolio</title>
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

      {/* Sidebar */}
      <aside
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static top-0 left-0 z-10 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Hela Mylavarapu</h1>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="hover:text-blue-600">
                  work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600">
                  contact
                </a>
              </li>
              <li>
                <a href="#bagel" className="hover:text-blue-600">
                  bagel
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-6">
            <h2 className="font-semibold mb-2">socials</h2>
            {/* Add your social links here */}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto">
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">MY three words</h2>
          <ul className="space-y-2">
            <li>IKEA</li>
            <li>Enable AI</li>
            <li>Atlantis DAO</li>
            <li>Harman international</li>
            <li>The rupesh kumar</li>
            <li>Alstom</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">
            strate school of design
          </h2>
          <p>strate school of design</p>
        </section>
        {/* Add more sections as needed */}
      </main>
    </div>
  );
};

export default Portfolio;
