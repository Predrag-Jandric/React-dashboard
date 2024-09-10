import { TiAttachment } from "react-icons/ti";

function ProjectCard({ project }) {
  return (
    <div className="p-6 bg-white rounded-xl space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-gray-700">{project.name}</h1>
        <p className="text-sm text-gray-500">{project.type}</p>
      </div>
      <p>
        <span className="text-xs p-2 rounded bg-gray-100">{project.date}</span>
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className="w-[40%] bg-indigo-500 rounded-full h-2"></div>
      </div>

      <div className="flex justify-between items-center">
        <div className="relative">
          <img
            className="w-8 h-8 rounded-full border-4 border-white"
            src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
            alt="woman"
          />
          <img
            className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-4"
            src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
            alt="woman"
          />
          <img
            className="w-8 h-8 rounded-full border-4 border-white absolute top-0 left-8"
            src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
            alt="woman"
          />
        </div>
        <p className="flex space-x-1 items-center text-gray-400">
          <TiAttachment />
          <span>{project.files} files</span>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
