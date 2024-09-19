import React from "react";
import { Mail, Linkedin, X, Box } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const email = "mylavarapuhela@gmail.com";

  return (
    <>
      <div className="flex flex-col mb-2 gap-8 items-center">
        <div className="w-full">
          <Link href={`mailto:${email}`} passHref legacyBehavior>
            <a className="inline-flex items-center border border-black text-black px-4 py-2 w-full rounded-md hover:border-gray-500 hover:text-gray-500 transition duration-300">
              <Mail size={24} className="mr-2" />
              Drop a message
            </a>
          </Link>
        </div>
        <div className="w-full flex items-center justify-start gap-4">
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
    </>
  );
};

export default ContactSection;
