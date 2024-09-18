const WorkItem = ({ title, description, date, author, imageUrl }) => (
  <div className="flex flex-col md:flex-row mb-12 bg-white p-6 rounded-lg ">
    <div className="md:w-2/3 pr-0 md:pr-6 mb-6 md:mb-0">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="text-sm text-gray-500">
        <span>{date}</span> • <span>{author}</span>
      </div>
    </div>
    <div className="md:w-2/3">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h object-cover rounded-lg"
      />
    </div>
  </div>
);
export default WorkItem;
