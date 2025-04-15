"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Award, Calendar, Medal, Trophy } from "lucide-react";

// Sample achievements data
const achievements = [
  {
    id: 1,
    title: " Runner-up in Ideathon Event",
    date: "2023",
    description: "Achieved 2nd place in the Ideathon event organized at Velagapudi Ramakrishna Siddhartha Engineering College on the occasion of APJ Abdul Kalam’s birthday.",
    icon: <Award className="h-10 w-10 text-yellow-500" />,
    category: "Academic"
  },
  {
    id: 2,
    title: "District 1st in Ramanujan Mathematics Test",
    date: "2018",
    description: "Secured the first position at the district level in the prestigious Ramanujan Mathematics Test during school, demonstrating strong problem-solving and analytical skills.",
    icon: <Trophy className="h-10 w-10 text-yellow-500" />,
    category: "Competition"
  },  
  {
    id: 3,
    title: "Research Publication",
    date: "2023",
    description: "Co-authored a research paper on Artificial Intelligence in Food Delivery, published in a peer-reviewed conference.",
    icon: <Award className="h-10 w-10 text-yellow-500" />,
    category: "Research"
  },
  {
    id: 4,
    title: "Research Publication",
    date: "2025",
    description: "Co-authored a research paper on Deep Learning in Video Summarization, published in a IEEE conference.",
    icon: <Award className="h-10 w-10 text-yellow-500" />,
    category: "Research"
  },
  {
    id: 5,
    title: "Leader of Championship Basketball Team",
    date: "2024", // Add the specific year here
    description: "Led the college basketball team to victory in a tournament, securing a trophy. Demonstrated leadership, teamwork, and strategic planning as the team captain.",
    icon: <Trophy className="h-10 w-10 text-yellow-500" />,
    category: "Sports"
  },
  

];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              My <span className="text-primary">Achievements</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground max-w-[700px] mb-8">
              Recognition and accomplishments that have marked my academic and professional journey.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <AnimatedSection
              key={achievement.id}
              delay={0.2 + index * 0.1}
              className="h-full"
            >
              <Card className="h-full border border-primary/20 overflow-hidden group">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {achievement.icon}
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {achievement.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <div className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{achievement.date}</span>
                  </div>
                  <p className="text-muted-foreground flex-grow">
                    {achievement.description}
                  </p>
                  <motion.div
                    className="h-1 bg-primary/50 mt-4 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
