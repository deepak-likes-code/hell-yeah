import React from "react";
import Link from "next/link";
import ContactSection from "./Contact";
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => (
  <aside
    className={`${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } md:translate-x-0 fixed md:sticky top-0 left-0 z-20 w-64 h-screen bg-white border-r border-black transition-transform duration-300 ease-in-out overflow-y-auto`}
  >
    <div className="p-6 mt-4 h-full flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Hela Mylavarapu</h1>
      <nav className="mb-6">
        <ul className="space-y-2 text-gray-600">
          <li>
            <Link href="/#journey" className="hover:text-black">
              My Journey So Far
            </Link>
          </li>
          <li>
            <Link href="/#education" className="hover:text-black">
              Education
            </Link>
          </li>
          <li>
            <Link href="/#work" className="hover:text-black">
              A Glimpse of My Work
            </Link>
          </li>
          <li>
            <Link href="/bagel"> Bagel</Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <ContactSection />
        {/* Add your social links here */}
      </div>
      {/* Mobile close button */}
      <button
        className="md:hidden absolute top-4 right-4 p-2 bg-white rounded-md shadow-md"
        onClick={onClose}
      >
        <X size={24} />
      </button>
    </div>
  </aside>
);

export default Sidebar;
