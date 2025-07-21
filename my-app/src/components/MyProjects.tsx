import Image from 'next/image';
import React from 'react';

const MyProjects = ({ project }) => {
  // Define gradient backgrounds for cards without images
  const gradients = [
    'bg-gradient-to-br from-orange-400 via-pink-500 to-red-500',
    'bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600',
    'bg-gradient-to-br from-green-400 via-blue-500 to-purple-600',
    'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500',
    'bg-gradient-to-br from-pink-400 via-red-500 to-yellow-500',
    'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500',
    'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600',
    'bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-500'
  ];

  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full overflow-hidden">
      {/* Image or Gradient Header */}
      <div className={`h-32 ${project.image ? 'bg-gray-100' : randomGradient} relative overflow-hidden`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <div className="w-8 h-8 bg-white/30 rounded-md"></div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h2>
        <p className="text-gray-600 text-xs mb-3 line-clamp-2">{project.description}</p>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          {project.viewLink && (
            <a
              href={project.viewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              View
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 text-gray-900 text-sm px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;