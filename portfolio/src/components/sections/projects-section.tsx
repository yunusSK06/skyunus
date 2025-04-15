"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

// Sample project data - replace with your own projects
const projects = [
  {
    id: 1,
    title: "Generative LLM model for Personalized AI and Task Automation",
    description: "Developed a custom LLM-based solution for automating routine tasks, incorporating personalization features to enhance accuracy and user relevance.",
    image: "/project-1.jpg", // Replace with actual image path
    tags: ["NLP", "Artificial Intelligence", "MongoDB", "Task Automation"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    title: "Smart AI Based - Food Delivery System",
    description: "Developed a fully functional food delivery system application which is integrated with artificial intelligence.",
    image: "/project-2.jpg", // Replace with actual image path
    tags: ["React", "DBMS", "Tailwind CSS","python", "Artificial Intelligence"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A real-time weather application that provides current conditions, forecasts, and historical data visualization.",
    image: "/project-3.jpg", // Replace with actual image path
    tags: ["JavaScript", "APIs", "Chart.js", "CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
  },
  {
    id: 4,
    title: "Social Media Clone",
    description: "Instagram app clone with features like photo sharing, user profiles, comments, likes, and real-time notifications.",
    image: "/instagram-clone.jpg", // Replace with actual image path
    tags: ["React", "Firebase", "Node.js", "Express", "CSS"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/instagram-clone",
    
  },
  {
    id: 5,
    title: " Real Time Road Accident Detection and Alert System",
    description: "Integrated Tensor Flow and object detection techniques to enable real-time accident detection through CCTV cameras.",
    image: "/project-4.jpg", // Replace with actual image path
    tags: ["TensorFlow", "Open CV", "Keras", "Machine Learning", "python"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
  },
  {
    id: 6,
    title: " ChatFlow-A real-time chat Application",
    description: "Developed a real-time chat application enabling users to send and receive messages instantly, with features like private chats, group conversations, and message notifications, ensuring seamless communication through a responsive and intuitive user interface.",
    image: "/project-4.jpg", // Replace with actual image path
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
  },
  {
    id: 7,
    title: "Deep Learning-Driven Real Time Video Summarization with Temporal Modeling and Attention Mechanism",
    description: "Developed and build a  video summarization system using ResNet, BiLSTM, and attention mechanisms to generate meaningful video summaries.",
    image: "/project-4.jpg", // Replace with actual image path
    tags: ["BiLSTM Networks", "Deep Learning", "ResNet", "Temporal Modeling", "Attention Mechanism"],
    demoLink: "https://example.com",
    githubLink: "https://github.com/yourusername/project",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              My <span className="text-primary">Projects</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-[700px] mb-8">
              Explore some of my recent work and personal projects.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.2 + index * 0.1}
            >
              <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-purple-400/20 flex items-center justify-center">
                  {/* Replace this div with an actual Image component when you have project images */}
                  <div className="text-lg font-semibold text-primary/60">
                    Project Image Placeholder
                  </div>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
