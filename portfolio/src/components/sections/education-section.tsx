"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, GraduationCap, Briefcase, MapPin } from "lucide-react";

// Sample education and experience data
const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Velagapudi Ramakrishna Siddhartha Engineering College",
    location: "Vijayawada, India",
    duration: "2021 - 2025",
    description: "Specialized in Web Development with a focus on Software Engineering and artificial intelligence.",
    courses: ["Data Structures and Algorithms", "Web Development", "Database Management Systems", "Machine Learning", "Software Engineering", "Computer Networks", "Operating Systems"],
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Sasi Junior College",
    location: "Andhra Pradesh, India",
    duration: "2019 - 2021",
    description: "Graduated with honors, focusing on Mathematics and Science.",
    courses: ["Mathematics", "Physics", "English", "Chemistry"],
  },
];



function TimelineItem({
  children,
  isLast,
  side = "left",
  icon,
  delay = 0
}: {
  children: React.ReactNode;
  isLast: boolean;
  side?: "left" | "right";
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <AnimatedSection delay={delay} className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute top-6 bottom-0 left-1/2 w-px bg-border -translate-x-1/2"
        />
      )}

      {/* Timeline content */}
      <div className="flex items-center justify-center gap-8 relative z-10">
        {/* For left side items */}
        {side === "left" && (
          <>
            <div className="w-1/2 pr-8 text-right hidden md:block">
              {children}
            </div>
            <div className="bg-background border-2 border-primary rounded-full p-2 z-10">
              {icon}
            </div>
            <div className="w-1/2 md:hidden">
              {children}
            </div>
            <div className="hidden md:block w-1/2" />
          </>
        )}

        {/* For right side items */}
        {side === "right" && (
          <>
            <div className="hidden md:block w-1/2" />
            <div className="bg-background border-2 border-primary rounded-full p-2 z-10">
              {icon}
            </div>
            <div className="w-1/2 pl-8">
              {children}
            </div>
          </>
        )}
      </div>
    </AnimatedSection>
  );
}

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Education & <span className="text-primary">Experience</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-[700px] mb-8">
              My academic journey and professional experiences that have shaped my skills and knowledge.
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Timeline */}
          <AnimatedSection delay={0.3} className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span>Education</span>
            </h3>

            <div className="space-y-12">
              {educationData.map((education, index) => (
                <TimelineItem
                  key={education.id}
                  isLast={index === educationData.length - 1}
                  side={index % 2 === 0 ? "left" : "right"}
                  icon={<GraduationCap className="h-5 w-5 text-primary" />}
                  delay={0.3 + index * 0.1}
                >
                  <Card className="border border-primary/20">
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center text-sm text-muted-foreground gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{education.duration}</span>
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{education.degree}</h4>
                      <div className="flex items-center mb-4 text-sm">
                        <span className="font-medium">{education.institution}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{education.description}</p>
                      <div>
                        <h5 className="text-sm font-semibold mb-2">Key Courses:</h5>
                        <div className="flex flex-wrap gap-2">
                          {education.courses.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TimelineItem>
              ))}
            </div>
          </AnimatedSection>

          {/* Experience Timeline */}
          
        </div>
      </div>
    </section>
  );
}
