import React from "react";
import WorkItem from "./WorkItem";
import { workItems } from "@/lib/data";

const WorkSection = () => {
  return (
    <section className="mb-12">
      {workItems.map((item, index) => (
        <WorkItem key={index} {...item} />
      ))}
    </section>
  );
};

export default WorkSection;
