import React from "react";
import { Mail, Linkedin, X, Box } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const email = "mylavarapuhela@gmail.com";

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-normal mb-6">Let's talk, say hi!</h2>
      <div className="flex flex-col  gap-8 items-start">
        <div className="md:w-1/2">
          <Link href={`mailto:${email}`} passHref legacyBehavior>
            <a className="inline-flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">
              <Mail size={20} className="mr-2" />
              Send me an email
            </a>
          </Link>
        </div>
        <div className="md:w-1/2 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/hela-mylavarapu-480686186/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://x.com/helamylavarapu?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition duration-300"
          >
            <X size={24} />
          </a>
          <a
            href="https://www.behance.net/helamylavarapu?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <Box size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
