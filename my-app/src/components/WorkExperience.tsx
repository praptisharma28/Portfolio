"use client";

const WorkExperience = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">

      {/* GSoC Intern */}
      <li className="mb-5 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-800">
          🧑‍💻
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          GSoC Intern at Google - OpenWISP
        </h3>
        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
          May 2024 – July 2024 · Remote
        </time>
        {/* <p className="text-base text-gray-700 dark:text-gray-300">
          Improved OpenWISP Monitoring by enhancing device health logic. Support integration for Elasticsearch and InfluxDB 2.7 using Flux. Built time-series visualizations and contributed 16+ PRs.
        </p>
        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
          <strong>Skills:</strong> Django · Elasticsearch · InfluxDB · Flux · Testing
        </p> */}
      </li>

      {/* Swyftin */}
      <li className="mb-5 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-800">
          ⚙️
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Backend Developer at Swyftin
        </h3>
        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
          Dec 2024 – May 2025 · Hybrid
        </time>
        {/* <p className="text-base text-gray-700 dark:text-gray-300">
          Migrated backend from Django to FastAPI. Integrated JWE, third-party APIs, and deployed using Docker on AWS with PostgreSQL.
        </p>
        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
          <strong>Skills:</strong> FastAPI · PostgreSQL · AWS · Docker · IVR
        </p> */}
      </li>

      {/* AI Intern */}
      <li className="mb-5 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-pink-800">
          🤖
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          AI Intern at Epsilon Creative Agency
        </h3>
        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
          Feb 2025 – June 2025 · Remote
        </time>
        {/* <p className="text-base text-gray-700 dark:text-gray-300">
          Built an AI-based photobooth using Stable Diffusion and ControlNet. Developed VIRA, a CV-evaluating AI mentor with behavioral testing.
        </p>
        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
          <strong>Skills:</strong> AI · Stable Diffusion · CV Analysis · UX
        </p> */}
      </li>

      {/* AWS Captain & Club */}
      <li className="mb-5 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-yellow-200 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-yellow-700">
          ☁️
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          AWS Cloud Captain & Founder at AWS Cloud Club KIET
        </h3>
        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
          Feb 2024 – Present
        </time>
        {/* <p className="text-base text-gray-700 dark:text-gray-300">
          Selected as one of 13 AWS Cloud Captains in India from 1,146 applicants. Founded Cloud Club KIET with 80+ members, hosted sessions, judged hackathons, and built a cloud community.
        </p>
        <div className="flex -space-x-4 rtl:space-x-reverse mt-2">
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/aws-icon1.png" alt="AWS" />
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/aws-icon2.png" alt="CLI" />
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/aws-icon3.png" alt="CloudFormation" />
          <a className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+5</a>
        </div> */}
      </li>

      {/* FOSSC Member */}
      <li className="mb-5 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-green-700">
        ♻️
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Member at FOSSCU
        </h3>
        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">
          Dec 2023 – Present
        </time>
        {/* <p className="text-base text-gray-700 dark:text-gray-300">
          Contributed to open source as part of FOSSC. Focused on backend engineering, Django, and full-stack development practices.
        </p>
        <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
          <strong>Skills:</strong> Django · Python · Backend · Full-Stack Web Development
        </p> */}
      </li>
    </ol>
  );
};

export default WorkExperience;
