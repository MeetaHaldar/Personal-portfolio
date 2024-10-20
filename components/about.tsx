"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    After completing my BTech, I delved deep into the world of coding and technology, exploring various tech stacks including{" "}
    <span className="font-medium">React.js, Node.js, and Vue.js</span>. With a knack for problem-solving, I crafted numerous personal projects and even interned as a full-stack developer, creating APIs for commercial websites. Additionally, my passion for tech extends to writing about it, leading me to intern as a Technical Engineer at GFG.

</p>

<p>
    <span className="italic">When I'm not coding</span>, I find joy in reading, dancing, and immersing myself in movies. Now, I'm eager to bring my diverse skills and unwavering enthusiasm to a full-time role in software development, where I can continue to learn and grow.
</p>


    </motion.section>
  );
}
