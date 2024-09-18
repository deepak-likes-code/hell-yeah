import React from "react";

const MasonryGrid = () => {
  const items = [
    {
      id: 1,
      width: 300,
      height: 200,
      title: "Project 1",
      description: "A brief description of Project 1",
    },
    {
      id: 2,
      width: 200,
      height: 300,
      title: "Project 2",
      description: "Details about Project 2",
    },
    {
      id: 3,
      width: 250,
      height: 250,
      title: "Project 3",
      description: "Information on Project 3",
    },
    {
      id: 4,
      width: 300,
      height: 180,
      title: "Project 4",
      description: "Short brief on Project 4",
    },
    {
      id: 5,
      width: 200,
      height: 200,
      title: "Project 5",
      description: "Quick summary of Project 5",
    },
    {
      id: 6,
      width: 250,
      height: 300,
      title: "Project 6",
      description: "Overview of Project 6",
    },
    {
      id: 7,
      width: 300,
      height: 250,
      title: "Project 7",
      description: "Concise info about Project 7",
    },
    {
      id: 8,
      width: 200,
      height: 350,
      title: "Project 8",
      description: "Brief note on Project 8",
    },
  ];

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="relative overflow-hidden group">
            <img
              src={`https://placehold.co/${item.width}x${item.height}`}
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
