"use client";

import { useState } from "react";
import ReactNativeProjects from "./ReactNativeProjects";
import NextProjects from "./NextProjects";
import AspDotNetCoreProjects from "./AspDotNetCoreProjects";

const tabs = [
  { name: "Next.js", content: <NextProjects /> },
  { name: "React Native Expo", content: <ReactNativeProjects /> },
  { name: "Asp .Net Core", content: <AspDotNetCoreProjects /> },
];

export default function ProjectsTab() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <main>
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
    </main>
  );
}
