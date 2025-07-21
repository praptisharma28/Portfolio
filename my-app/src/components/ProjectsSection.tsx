import Image from "next/image";
import React from "react";
// Import your images here when you have them
// import Emojigit from "../images/Emojigit.PNG";
// import HuluClone from "../images/HuluClone.PNG";
// etc...

// Map image names to your imported images (when available)
const imageMap = {
  // Emojigit,
  // HuluClone,
  // KryptPreview,
  // FormVibePreview,
  // DevBlogsPreview,
  // CloudSpacePreview,
  // PortfolioPreview,
  // ChatSpacePreview,
  // BlogBuddyPreview,
};

export const projects = [
  {
    title: "MiniServe-RS",
    description: "A minimal HTTP server built in Rust exploring low-level networking, request parsing and response handling.",
    codeLink: "https://github.com/praptisharma28/miniserve-rs",
    techStack: ["Rust", "Networking", "HTTP"]
  },
  {
    title: "PeerProof",
    description: "A trustless, escrow-powered P2P marketplace on Solana with NFT reputation and wallet-based identity.",
    viewLink: "https://peer-proof.vercel.app",
    codeLink: "https://github.com/praptisharma28/PeerProof",
    techStack: ["Solana", "Rust", "React", "Web3"]
  },
  {
    title: "SolMate CLI",
    description: "Beginner-friendly CLI wallet on Solana teaching keypairs, airdrops, transactions, block explorers.",
    codeLink: "https://github.com/praptisharma28?tab=repositories",
    techStack: ["Solana", "CLI", "Rust", "Blockchain"]
  },
  {
    title: "Rakt-Setu",
    description: "Comprehensive blood donation platform with roles like Admin, Donor, Hospital, Organization. Built with MERN stack.",
    codeLink: "https://github.com/praptisharma28/Rakt-Setu",
    techStack: ["MongoDB", "Express", "React", "Node.js"]
  },
  {
    title: "ChainUPI",
    description: "Live multi-chain crypto payment platform for secure transactions. Built with Rust, Solidity, React, AWS, Docker.",
    viewLink: "https://chainupi.tech/",
    codeLink: "https://github.com/praptisharma28/ChainUPI",
    techStack: ["Rust", "Solidity", "React", "AWS", "Docker"]
  },
  {
    title: "Security Log Analyzer",
    description: "Python-based cybersecurity threat detection tool which analyzes IP requests, flagged activity, and provides visualizations.",
    codeLink: "https://github.com/praptisharma28/Security-Log-Analyzer",
    techStack: ["Python", "Cybersecurity", "Data Analysis"]
  },
  {
    title: "ReportFakeJobs",
    description: "Drag-and-drop platform to report fake job links, ranked by community upvotes. Built with React and Firebase.",
    codeLink: "https://github.com/praptisharma28/ReportFakeJobs",
    techStack: ["React", "Firebase", "TypeScript"]
  },
  {
    title: "ImageHasher",
    description: "Django API to accept public image URL, calculate MD5 and pHash, and store it in DB.",
    codeLink: "https://github.com/praptisharma28/imagehasher",
    techStack: ["Django", "Python", "API", "Hashing"]
  },
  {
    title: "DIRP",
    description: "End-to-end encrypted messaging in image/video using steganography.",
    codeLink: "https://github.com/praptisharma28/DIRP",
    techStack: ["Python", "Steganography", "Encryption"]
  },
  {
    title: "TODO DjangoReact",
    description: "A dockerized full-stack web app built to learn React-Django integration.",
    codeLink: "https://github.com/praptisharma28/TODO_DjangoReact",
    techStack: ["Django", "React", "Docker", "Full-Stack"]
  },
];

const ProjectCard = ({ project }) => {
  const imageSrc = project.image && imageMap[project.image as keyof typeof imageMap];
  
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

  const getGradient = (title: string) => {
    const index = title.length % gradients.length;
    return gradients[index];
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.015] transition-all duration-300 max-w-md overflow-hidden">
      {/* Image or Gradient Header */}
      <div className={`h-48 ${imageSrc ? 'bg-gray-100' : getGradient(project.title)} relative overflow-hidden`}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
              <div className="w-12 h-12 bg-white/30 rounded-lg"></div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

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

const ProjectsSection = () => (
  <section className="py-10 px-6 max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-8">Projects</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;