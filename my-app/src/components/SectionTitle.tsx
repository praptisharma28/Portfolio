import React from "react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3">
      {title}.
    </h1>
  );
};

export default SectionTitle;
