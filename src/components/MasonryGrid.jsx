import React from "react";
import { masonryGridItems as items } from "@/lib/data";
import Link from "next/link";

const MasonryGrid = () => {
  return (
    <div className="bg-white flex-1 mb-10 px-4 ">
      <Link
        href="/"
        className="block md:hidden text-center py-4 text-xl font-semibold"
      >
        Hela Mylavarapu
      </Link>
      <div className="grid grid-cols-1 mt-12 md:mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="relative overflow-hidden group">
            <img
              src={item.source}
              alt={item.title}
              height={item.height}
              width={item.width}
              className={`w-auto h-auto object-cover transition-transform duration-300 group-hover:scale-110`}
            />
            <div
              className={`absolute  inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
            >
              <div className="text-white text-center p-4">
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
