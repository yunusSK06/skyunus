"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/ui/animated-section";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              About <span className="text-primary">Me</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-[700px] mb-8">
              Get to know me better - my background, interests, and what drives me in the world of technology and beyond.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection delay={0.3} className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Who I Am</h3>
            <p className="text-muted-foreground">
              I'm a passionate student with a deep love for technology and creating innovative solutions. Currently pursuing my degree in Computer Science, 
              I combine technical knowledge with creativity to build compelling digital experiences.
            </p>
            <p className="text-muted-foreground">
            Beyond coding, I enjoy reading and exploring new technologies which help me maintain a balanced perspective and bring fresh ideas to my work.
            </p>
            <h3 className="text-xl font-semibold text-primary pt-2">My Approach</h3>
            <p className="text-muted-foreground">
              I believe in continuous learning and pushing my boundaries. Every project is an opportunity to explore new technologies and refine my skills.
              I'm particularly interested in Artificial Intelligence, Mahine Learning and Web Development and am excited about the future of technology in these domains.
            </p> 
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.4}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Name:</span>
                      <span className="text-muted-foreground">Yunus Sheik</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Age:</span>
                      <span className="text-muted-foreground">22</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Location:</span>
                      <span className="text-muted-foreground">India,Andhra Pradesh</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Education:</span>
                      <span className="text-muted-foreground">Bachelor of Technology</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Email:</span>
                      <span className="text-muted-foreground">yunussheik0611@gmail.com</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">My Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Machine Learning', 'Artificial Intelligence'].map((interest) => (
                      <div
                        key={interest}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
