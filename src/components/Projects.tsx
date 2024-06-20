"use client";

import { useState } from "react";
import MernStackProjects from "./MernStackProjects";
import ReactNativeProjects from "./ReactNativeProjects";

const tabs = [
  { name: "MERN Stack", content: <MernStackProjects /> },
  { name: "React Native", content: <ReactNativeProjects /> },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <main id="projects" className="w-full h-full pt-[150px] lg:pt-[950px]">
      <section className="max-w-[1240px] mx-auto px-2">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8"></div>
      </section>
      <section>
        <div className="flex space-x-4 border-b-fit justify-center items-center">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`py-2 px-4 ${
                activeTab === tab.name
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-center items-center">
          {tabs.map(
            (tab) =>
              activeTab === tab.name && (
                <div key={tab.name} className="p-4">
                  {tab.content}
                </div>
              )
          )}
        </div>
      </section>
    </main>
  );
}
