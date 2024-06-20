import MernStackProjects from "./MernStackProjects";
import ReactNativeProjects from "./ReactNativeProjects";

const tabs = [
  { name: "MERN Stack", content: <MernStackProjects /> },
  { name: "React Native", content: <ReactNativeProjects /> },
];

export default function ProjectsTabs() {
  return <main>ProjectsTabs</main>;
}
