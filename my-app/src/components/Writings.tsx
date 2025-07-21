"use client";

import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import WritingsBox from "./WritingsBox";
import AnimatedWrapper from "@/utils/AnimatedWrapper";
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowUp } from "react-icons/md";

const writings = [
  {
    id: 1,
    img: "/blog/blog1.png",
    head: "My Journey in Open Source: From Small Programs to GSoC with OpenWISP 🚀",
    des: "This blog helps 1st and 2nd-year students navigate open source. I share how I began, grew, and landed GSoC at OpenWISP.",
    link: "https://medium.com/@praptii/my-journey-in-open-source-gsoc-openwisp",
  },
  {
    id: 2,
    img: "/blog/blog2.png",
    head: "Diving Deep into Solana and Blockchain",
    des: "A deep dive into the core concepts of Solana and blockchain tech, pulling directly from our comprehensive PDF series.",
    link: "https://medium.com/@praptii/diving-deep-into-solana-and-blockchain",
  },
  {
    id: 3,
    img: "/blog/blog3.png",
    head: "Traits and Macros in Rust 🦀: The Complete Beginner-to-Advanced Guide",
    des: "From traits to macro_rules!, this guide is your one-stop for mastering Rust programming from the ground up.",
    link: "https://medium.com/@praptii/rust-traits-macros-guide",
  },
  {
    id: 4,
    img: "/blog/blog4.png",
    head: "Why choose Rust over JavaScript?",
    des: "“JavaScript lets bugs sneak in. Rust wrestles them at compile time.” Here’s why Rust deserves your love.",
    link: "https://medium.com/@praptii/why-choose-rust-over-js",
  },
]


const Writings = () => {
  const showAllVis = writings.length > 2;
  const [showAll, setShowAll] = useState(false);
  const visibleWritings = showAll ? writings : writings.slice(0, 2);
  let delayValue = 0;

  return (
    <section className="flex flex-col gap-6">
      <SectionTitle title="Writings" />

      <div className="flex flex-col md:gap-4 gap-5">
        {visibleWritings.map((writing) => (
          <AnimatedWrapper
            key={writing.id}
            delay={writing.id === 1 ? delayValue : (delayValue += 0.075)}
          >
            <WritingsBox
              img={writing.img}
              head={writing.head}
              des={writing.des}
              link={writing.link}
            />
          </AnimatedWrapper>
        ))}
      </div>

      {showAllVis && (
        <button
          className="mt-4 self-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
          onClick={() => setShowAll((prev) => !prev)}
        >
          <div className="flex gap-1 items-center">
            <span className="animate-pulse">
              {showAll ? <MdKeyboardDoubleArrowUp /> : <MdKeyboardDoubleArrowDown />}
            </span>
            {showAll ? "Show less" : "Show all"}
          </div>
        </button>
      )}
    </section>
  );
};

export default Writings;
