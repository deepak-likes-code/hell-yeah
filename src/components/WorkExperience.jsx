import { useState } from "react";

const WorkExperience = ({ experiences }) => {
  const [activeCompany, setActiveCompany] = useState("ENABLE AI");

  return (
    <div className="flex flex-col md:flex-row ">
      <div className="w-full md:w-1/3 pr-4 mb-4 md:mb-0 ">
        <div className="h-full flex flex-col justify-evenly">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer group"
              onClick={() => setActiveCompany(exp.company)}
            >
              <div className="flex items-center">
                <div
                  className={`w-2 h-2 rounded-full mr-2 transition-colors duration-200 ${
                    activeCompany === exp.company
                      ? "bg-gray-500"
                      : "bg-transparent group-hover:bg-gray-300"
                  }`}
                />
                <h3
                  className={`text-lg font-semibold transition-colors ${
                    activeCompany === exp.company
                      ? "text-gray-500"
                      : "group-hover:text-gray-500"
                  }`}
                >
                  {exp.company}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}

      <div className="w-full h-full md:w-2/3">
        {activeCompany && (
          <div className=" md:h-[200px] bg-white p-4 rounded-sm border border-black ">
            {experiences.map(
              (exp, index) =>
                exp.company === activeCompany && (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-2">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-gray-600  mb-2">
                      {exp.role} | {exp.period}
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperience;
