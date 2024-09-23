import React, { useEffect } from "react";
import WorkExperience from "./WorkExperience";
import { workExperienceData } from "@/lib/data";
import WorkSection from "./MyWork";
import ContactSection from "./Contact";
import Link from "next/link";
import Image from "next/image";

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
    <main className="flex-1 p-4 md:p-12 overflow-y-auto min-h-screen">
      {/* Hero Image */}
      <section className="mb-12 md:mb-36">
        <div className="w-full h-48 sm:h-64 md:h-[50vh] lg:h-[70vh] relative rounded-lg overflow-hidden">
          <Image
            src="/images/hero.jpeg"
            alt="Hero image describing your work or personality"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      <section className="mb-12 md:mb-36">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          INTERACTION DESIGNER · DESIGN RESEARCHER · ETERNALLY CURIOUS · FINDING
          PATTERNS · UNCOVERING TRENDS
        </h2>
      </section>

      <section id="journey" className="mb-12 md:mb-36">
        <h2 className="text-xl md:text-2xl font-normal mb-6">
          MY JOURNEY SO FAR
        </h2>
        <WorkExperience experiences={workExperienceData} />
        <div className="underline mt-4 md:absolute md:right-12">
          <a
            href="/pdf/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Download My Resume
          </a>
        </div>
      </section>

      <section id="work" className="mb-12 md:mb-36">
        <h2 className="text-xl md:text-2xl font-normal mb-4">
          A GLIMPSE OF MY WORK
        </h2>
        <WorkSection />
      </section>

      {/* Footer Image */}
      <section className="mb-4">
        <div className="w-full h-48 sm:h-64 md:h-[50vh] lg:h-[70vh] relative rounded-lg overflow-hidden">
          <Image
            src="/images/footer_new.jpeg"
            alt="Footer image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
