import React, { useEffect } from "react";
import WorkExperience from "./WorkExperience";
import { workExperienceData } from "@/lib/data";
import WorkSection from "./MyWork";
import ContactSection from "./Contact";
import Link from "next/link";

const MainContent = ({ setActiveSection }) => {
  useEffect(() => {
    if (typeof setActiveSection !== "function") return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActiveSection]);

  return (
    <main className="flex-1 p-6 md:p-12 overflow-y-auto min-h-screen">
      {/* Image */}
      <section className="mb-36">
        <div className="bg-gray-300 w-full h-[70vh] rounded-lg flex items-center justify-center">
          <span className="text-gray-600 text-lg">Hero Image Placeholder</span>
        </div>
      </section>

      <section className="mb-36">
        <h2 className="text-xl font-semibold mb-4">MY three words</h2>
      </section>

      <section id="journey" className="mb-36  ">
        <h2 className="text-2xl font-normal mb-6 ">MY JOURNEY SO FAR</h2>
        <WorkExperience experiences={workExperienceData} />
        <div className="underline absolute mt-4 md:right-12">
          <Link href={"/"}>Download My Resume</Link>
        </div>
      </section>

      <section id="education" className="mb-36">
        <h2 className="text-2xl font-normal mb-4">EDUCATION</h2>
        <p className="text-xl font-semibold"> Strate school of design </p>

        <p className="">Masters in Interaction Design 2024 </p>
        <p className="">Bachelors in Interaction Design 2022 </p>
      </section>
      {/* Add more sections as needed */}

      {/* work */}
      <section id="work" className="mb-36">
        <h2 className="text-2xl font-normal mb-4">A GLIMPSE OF MY WORK</h2>

        <WorkSection />
      </section>

      <section id="contact" className="mb-36">
        <ContactSection />
      </section>
    </main>
  );
};

export default MainContent;
