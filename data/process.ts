import type { ProcessStep } from "@/types";

/** The five-step working process. Edit copy here. */
export const process: ProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description: "Get clear on the problem, the users and what the software actually needs to do.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Shape the data model, the APIs and the screens before writing feature code.",
  },
  {
    number: "03",
    title: "Build",
    description: "Implement the backend and frontend together, in small, reviewable pieces.",
  },
  {
    number: "04",
    title: "Test",
    description: "Check the flows, roles and edge cases so the system behaves under real use.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, verify in production and hand over something ready to use.",
  },
];
