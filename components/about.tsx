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
 I am Meeta Haldar, a passionate software developer with a strong foundation in web development and technical problem-solving. I hold a Bachelor of Technology (B.Tech) from NSUT West Campus, where I graduated with a CGPA of 8.9. I have worked as a full-time MTS at GeeksforGeeks, where I contributed to streamlining the write portal, improving navigation, and resolving critical bugs for enhanced stability. Additionally, I developed secure RESTful APIs with JWT authentication, ensuring robust performance and data protection. I am committed to continuously learning and optimizing user experiences through innovative and efficient solutions.

</p>



    </motion.section>
  );
}
