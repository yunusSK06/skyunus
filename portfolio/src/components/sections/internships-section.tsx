"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Building, Calendar, Clock, MapPin, Link2, ArrowUpRight } from "lucide-react";

// Sample internships data
const internships = [
  {
    id: "internship-1",
    company: "Innovate Intern",
    position: "Web Developer Intern",
    period: "December 2024 - April 2025",
    location: "India, (Remote)",
    duration: "4 months",
    type: "internship",
    description: "Worked with the front-end development team to design and implement responsive user interfaces for web applications using React and TypeScript.",
    responsibilities: [
      "Developed and maintained dynamic web interfaces using React and TypeScript, ensuring high performance and responsiveness",
      "Built and integrated RESTful APIs using Node.js and Express, facilitating smooth front-end and back-end communication",
      "Wrote modular, reusable components in JavaScript/TypeScript, following best coding practices and design patterns",
      "Integrated third-party libraries and APIs to extend app functionalities",
      "Implemented responsive design for mobile compatibility"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "JavaScript"],
    projects: [
      {
        name: "Customer Dashboard Redesign",
        description: "Contributed to redesigning the customer analytics dashboard, improving usability and performance."
      },
      {
        name: "Mobile Responsiveness",
        description: "Implemented responsive design patterns to make the web application accessible on mobile devices."
      }
    ],
  },
  {
    id: "internship-2",
    company: "Amazon AWS Cloud",
    position: "AWS Cloud Internship",
    period: "May 2024 - September 2024",
    location: "India, (Remote)",
    duration: "4 months",
    type: "Internship",
    description: "Assisted in creating interactive data visualizations and dashboards using AWS services such as QuickSight, Lambda, and S3, delivering insights for clients in the finance and healthcare sectors.",
    responsibilities: [
      "Deployed and managed web applications on AWS EC2, ensuring high availability and scalability",
      "Utilized S3 for secure storage and efficient delivery of static assets such as images, videos, and documents",
      "Configured IAM roles and policies for fine-grained access control and secure resource management",
      "Designed and maintained cloud infrastructure using AWS CloudFormation and Terraform for Infrastructure as Code (IaC)",
      "Leveraged API Gateway and Lambda to build secure, serverless REST APIs"
    ],
    technologies: ["Amazon EC2", "AWS Lambda", "Amazon API Gateway", "AWS IAM", "Amazon RDS"],
    projects: [
      {
        name: "Serverless Video Summarization API",
        description: "Built a serverless backend using AWS Lambda, API Gateway, and S3 to upload videos, run inference, and return keyframes in real time."
      },
      {
        name: "Scalable Chat App Backend",
        description: "Developed a real-time messaging backend using Node.js, hosted on EC2, with RDS for data storage and Elastic Load Balancer for traffic management."
      }
    ],
  },
  {
    id: "internship-3",
    company: "Salesforce",
    position: "Salesforce Virtual Internship",
    period: "May 2023 - November 2023",
    location: "India, (Virtual)",
    duration: "6 months",
    type: "Internship",
    description: "Assisted in the development of a Salesforce-based application for managing business processes, leveraging Apex, Lightning Web Components (LWC), and Flow Builder to streamline automation and improve user interaction.",
    responsibilities: [
      "Gained hands-on experience in Salesforce CRM, including Apex programming, data modeling, and component-based development using Lightning Web Components (LWC)",
      "Mastered Salesforce Fundamentals such as object relationships, business logic, automation, and user access control",
      " Apex Specialist – Demonstrated ability in custom logic, triggers, test classes, and integration",
      "Process Automation Specialist – Built flows, validation rules, approval processes, and workflow rules",
      "Developer Super Set – A combination of multiple challenges showcasing full-stack Salesforce development skills"
    ],
    technologies: ["Salesforce Platform", "Apex Programming Language", "Lightning Web Components (LWC)", "Trailhead (Superbadges)", "Salesforce CLI"],
    projects: [
      {
        name: "Employee Onboarding Flow",
        description: "Built an automated onboarding process using Salesforce Flow Builder to assign tasks, send welcome emails, and update user profiles when a new employee is added."
      },
      {
        name: "Lead Management System",
        description: "Developed a custom app to manage leads using Apex Classes and LWC. Included lead creation, automatic assignment, and stage tracking with custom objects and SOQL queries."
      }
    ],
  }
];

export function InternshipsSection() {
  return (
    <section id="internships" className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              My <span className="text-primary">Internships</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-[700px] mb-8">
              Professional experiences that have allowed me to apply my skills in real-world environments and learn from industry experts.
            </p>
          </AnimatedSection>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue={internships[0].id} className="w-full">
            <TabsList className="mb-8 w-full h-auto flex flex-wrap justify-center gap-2 bg-transparent">
              {internships.map((internship) => (
                <TabsTrigger
                  key={internship.id}
                  value={internship.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full"
                >
                  {internship.company}
                </TabsTrigger>
              ))}
            </TabsList>

            {internships.map((internship, index) => (
              <TabsContent key={internship.id} value={internship.id}>
                <AnimatedSection delay={0.3} className="space-y-8">
                  <Card className="overflow-hidden border border-primary/20">
                    <CardContent className="p-0">
                      <div className="bg-primary/10 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <Building className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold">{internship.position}</h3>
                              <p className="text-sm font-medium">{internship.company}</p>
                            </div>
                          </div>
                          
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{internship.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{internship.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{internship.duration} • {internship.type}</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-muted-foreground mb-6">
                          {internship.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-base font-semibold mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground list-disc pl-5">
                            {internship.responsibilities.map((responsibility) => (
                              <li key={responsibility}>{responsibility}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-base font-semibold mb-3">Key Projects</h4>
                          <div className="space-y-4">
                            {internship.projects.map((project) => (
                              <div key={project.name} className="rounded-lg bg-accent/40 p-4">
                                <h5 className="font-medium text-sm mb-1">{project.name}</h5>
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {internship.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
