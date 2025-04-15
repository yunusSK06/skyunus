"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Link as LinkIcon } from "lucide-react";

// Sample workshops data
const workshops = [
  {
    id: "workshop-1",
    title: "Artificial Intelligence Workshop",
    organizer: "AI Tech Hub",
    date: "September 2023",
    location: "Online",
    duration: "40 hours",
    description: "Comprehensive workshop on artificial intelligence, covering key concepts, machine learning algorithms, and AI applications in various industries.",
    topics: [
      "Introduction to Artificial Intelligence",
      "Machine Learning Algorithms",
      "Natural Language Processing (NLP)",
      "AI in Robotics",
      "Ethics in AI"
    ],

  },
  {
    id: "workshop-2",
    title: "IoT Fundamentals",
    organizer: "IoT Innovators",
    date: "July 2023",
    location: "Academic",
    duration: "16 hours",
    description: "Hands-on workshop covering the Internet of Things (IoT), including device connectivity, sensors, and IoT protocols.",
    topics: [
      "IoT Architecture and Components",
      "Sensors and Actuators",
      "IoT Communication Protocols",
      "Cloud Integration for IoT",
      "Security in IoT"
    ],

  },
  {
    id: "workshop-3",
    title: "AWS Cloud Computing Workshop",
    organizer: "AWS Community Day",
    date: "March 2023",
    location: "Online",
    duration: "12 hours",
    description: "Workshop focused on AWS cloud services, including EC2, S3, Lambda, and best practices for deploying scalable and secure cloud applications.",
    topics: [
      "Introduction to AWS Cloud",
      "AWS EC2 and S3 Essentials",
      "Serverless Architectures with AWS Lambda",
      "Cloud Security Best Practices",
      "Cost Management and Optimization in AWS"
    ],

  }
  
];

export function WorkshopsSection() {
  return (
    <section id="workshops" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Workshops & <span className="text-primary">Training</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-[700px] mb-8">
              Professional development workshops and training programs I've attended to enhance my skills and knowledge.
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {workshops.map((workshop, index) => (
              <AnimatedSection
                key={workshop.id}
                delay={0.2 + index * 0.1}
              >
                <AccordionItem
                  value={workshop.id}
                  className="border border-primary/20 rounded-lg overflow-hidden data-[state=open]:bg-accent/40"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/40 group transition-all [&>svg]:transition-transform">
                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left gap-2">
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {workshop.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{workshop.organizer}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{workshop.date}</span>
                        </div>
                        <div className="hidden md:flex items-center gap-1 text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{workshop.location}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-0 pb-4">
                    <div className="pt-4 border-t">
                      <div className="mb-4 flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground md:hidden">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{workshop.location}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{workshop.duration}</span>
                        </div>
                       
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {workshop.description}
                      </p>
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Key Topics Covered:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-4 text-sm text-muted-foreground list-disc pl-5">
                          {workshop.topics.map((topic) => (
                            <li key={topic}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </AnimatedSection>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
