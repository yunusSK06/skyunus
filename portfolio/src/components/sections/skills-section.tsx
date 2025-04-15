"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaDatabase,
  FaPython,
  FaJava,
  FaAws,       
  FaBrain,              // AI icon
  FaRegLightbulb,       // Machine Learning icon (used to represent intelligence)
  FaGraduationCap, 
  FaCode,
  FaNetworkWired,
  FaEye,
  FaDesktop,    // Deep Learning icon (symbolizing education/learning)
  
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiFlutter,
} from "react-icons/si";

// Define skills with their icons and descriptions
const skills = [
  {
    name: "OS",
    icon: FaDesktop,  // Or FaLaptop for mobile-related development
    color: "#008CBA",
    description: "Proficient in designing and managing operating systems, including process scheduling and resource management."
  },
  {
    name: "Networks",
    icon: FaNetworkWired,
    color: "#FF6347",
    description: "Understanding of networking protocols, architecture, and communication between devices."
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#e34c26",
    description: "Proficient in writing semantic HTML and structuring web content."
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#264de4",
    description: "Strong CSS skills including flexbox, grid, animations and responsive design."
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#f7df1e",
    description: "Advanced JavaScript including ES6+ features, async programming, and DOM manipulation."
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178c6",
    description: "Experience with TypeScript for building type-safe applications."
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61dafb",
    description: "Building interactive UIs with React, including hooks, context API, and state management."
  },

  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    description: "Utility-first CSS framework for rapid UI development."
  },
  {
    name: "Node.js",
    icon: FaNode,
    color: "#68a063",
    description: "Building server-side applications and APIs with Node.js."
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#4DB33D",
    description: "NoSQL database experience for building scalable applications."
  },
  {
    name: "Computer Vision",
    icon: FaEye,
    color: "#4CAF50",
    description: "Experience in building computer vision models for image recognition and object detection."
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "#00758F",
    description: "Working with relational databases and writing complex queries."
  },

  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    description: "Python for scripting, data analysis, and backend development."
  },
  {
    name: "Java",
    icon: FaJava,
    color: "#007396",
    description: "Object-oriented programming with Java."
  },

  {
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
    description: "Building applications with Firebase for authentication and database."
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
    description: "Cross-platform mobile app development with Flutter."
  },

  {
    name: "AWS",
    icon: FaAws,
    color: "#FF9900",
    description: "Cloud services and deployment with Amazon Web Services."
  },

  {
    name: "Machine Learning",
    icon: FaRegLightbulb,  // or another relevant icon
    color: "#FF6F61",
    description: "Experience in developing machine learning models for data-driven predictions and automation."
  },
  {
    name: "AI",
    icon: FaBrain,
    color: "#00A9E0",
    description: "Developed AI systems for intelligent decision-making and automated problem-solving."
  },
  {
    name: "Deep Learning",
    icon: FaGraduationCap,  // or another relevant icon like 'FaLightbulb'
    color: "#8A2BE2",
    description: "Expertise in creating deep learning models for complex tasks like image and speech recognition."
  },
  {
    name: "DBMS",
    icon: FaDatabase,
    color: "#4DB8FF",
    description: "Experienced with relational and non-relational databases for efficient data storage and management."
  },
  {
    name: "C++",
    icon: FaCode,  // Use FaCode as a placeholder for C++
    color: "#00599C",
    description: "Proficient in C++ for building efficient and high-performance applications."
  },
  

  
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-[700px] mb-8">
              Technical skills I've acquired through education, projects, and professional experiences.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <AnimatedSection
              key={skill.name}
              className="flex justify-center"
              delay={0.1 + index * 0.05}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <motion.div
                    className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <skill.icon
                      className="text-4xl md:text-5xl"
                      style={{ color: skill.color }}
                    />
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
