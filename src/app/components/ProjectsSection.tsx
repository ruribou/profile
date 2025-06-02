import React from "react";

const ProjectsSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">プロジェクト</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((project) => (
          <div key={project} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
            <div className="relative h-48 bg-gray-200">
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">プロジェクト {project}</h3>
              <p className="text-gray-600 mb-4">
                プロジェクトの説明文をここに記載します。
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;