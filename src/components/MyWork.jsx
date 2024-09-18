import React from "react";
import WorkItem from "./WorkItem";

const WorkSection = () => {
  const workItems = [
    {
      title:
        "La Route tournante à Montgeroult (1898)- Paving the Artistic Future",
      description: `As the 19th century folded into the pages of history, the art world found itself at the threshold of a new era, with Paul Cézanne leading the charge. "La Route tournante à Montgeroult," painted in 1898, stands as a remarkable testament to Cézanne's pivotal role in shaping the future of visual art. This masterpiece not...`,
      date: "November 7, 2023",
      author: "Takashi Irie",
      imageUrl: "https://placehold.co/200x300", // Placeholder image
    },
    {
      title:
        "The Road Bridge at L'Estaque (1879-1882): Constructing the Modern Landscape",
      description: `In the rich tapestry of Paul Cézanne's artistic oeuvre, "The Road Bridge at L'Estaque" holds a distinct place, stitched with the delicate threads of transition and anticipation of the modern art movement. Created between 1879 and 1882, this landscape painting is more than a visual record of the Provençal countryside; it is a reflection of...`,
      date: "November 7, 2023",
      author: "Takashi Irie",
      imageUrl: "https://placehold.co/200x300", // Placeholder image
    },
  ];

  return (
    <section className="mb-12">
      {workItems.map((item, index) => (
        <WorkItem key={index} {...item} />
      ))}
    </section>
  );
};

export default WorkSection;
