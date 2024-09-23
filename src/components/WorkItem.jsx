import Link from "next/link";

const WorkItem = ({
  title,
  description,
  timeline,
  subtitle,
  imageUrl,
  downloadLink,
  info,
}) => (
  <div className="flex flex-col md:flex-row mb-12 bg-white p-6 rounded-lg ">
    <div className="md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
      <h3 className="text-3xl font-bold mb-1">{title}</h3>
      <p className="text-xl text-black font-semibold mb-4">{subtitle}</p>
      <p className="text-xl text-gray-700 mb-4 ">{info}</p>

      <p className="text-gray-700 mb-4">{description}</p>
      {/* <p className="text-sm text-gray-500 mb-4">{timeline}</p> */}

      <div className="text-normal underline text-black hover:text-gray-500">
        <Link target="_blank" href={downloadLink}>
          View Project
        </Link>
      </div>
    </div>
    <div className="md:w-2/3">
      <Link target="_blank" href={downloadLink}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h object-cover rounded-lg"
        />
      </Link>
    </div>
  </div>
);
export default WorkItem;
