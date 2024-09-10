// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
import Platforms from "../components/Platforms";
import ProjectStatistics from "../components/ProjectStatistics";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    name: "Mobile app development",
    type: "Mobile application",
    date: "2024-02-10",
    members: ["David", "Eva", "Frank"],
    files: 9,
    progress: 80,
  },
  {
    name: "Mobile app development",
    type: "Mobile application",
    date: "2024-02-10",
    members: ["David", "Eva", "Frank"],
    files: 9,
    progress: 80,
  },
  {
    name: "Mobile app development",
    type: "Mobile application",
    date: "2024-02-10",
    members: ["David", "Eva", "Frank"],
    files: 9,
    progress: 80,
  },
  {
    name: "Mobile app development",
    type: "Mobile application",
    date: "2024-02-10",
    members: ["David", "Eva", "Frank"],
    files: 9,
    progress: 80,
  },
];

const clients = [
  {
    name: "ABC company",
    title: "CEO",
    date: "2024-04",
  },
  {
    name: "ABC company",
    title: "CEO",
    date: "2024-04",
  },
  {
    name: "ABC company",
    title: "CEO",
    date: "2024-04",
  },
  {
    name: "ABC company",
    title: "CEO",
    date: "2024-04",
  },
];

function Home() {
  return (
    <div className="p-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProjectStatistics />
        <Platforms />
        <ProjectStatistics />
        <Platforms />
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Current Projects</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects &&
            projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-lg font-semibold">Current Projects</h1>
          <p className="text-sm underline text-indigo-600">See all</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects &&
            projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
        </div>
      </div>

      {/* <div className="flex">
        <Sidebar />
        <div className="w-full ml-16 md:ml-56">
          <Header />
          <Outlet />
          Home
        </div>
      </div> */}
    </div>
  );
}

export default Home;
