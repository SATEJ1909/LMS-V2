
import { ArrowRight, Quote, BookOpen, Github, Linkedin, Twitter } from "lucide-react";

import React from 'react';
import { motion } from 'framer-motion';

// --- Helper Components & Icons (inlined for portability) ---

// Defining the SVG icons used in the component
const BookOpenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>;
const ArrowRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const QuoteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-neon-blue mb-4 mx-auto"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v6c0 7 4 8 8 8Z"></path><path d="M21 21c-3 0-7-1-7-8V5c0-1.25.75-2 2-2h4c1.25 0 2 .75 2 2v6c0 7-4 8-8 8Z"></path></svg>;
const GithubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .8-.4 1.5-.8 2.1-.7 1.1-1.8 1.9-3.2 2.3-1.4.4-3.1.5-4.7.3-1.5-.2-2.9-.7-4.2-1.4-1.3-.7-2.5-1.6-3.5-2.7-1-1.1-1.8-2.3-2.3-3.6-.5-1.3-.7-2.7-.5-4.1.2-1.4.7-2.7 1.4-3.9.7-1.2 1.6-2.3 2.7-3.2 1.1-.9 2.3-1.5 3.6-1.8.4-.1.8-.1 1.2-.1h.2c.3 0 .5.1.7.2.2.1.4.2.6.4.2.1.3.3.4.5.1.2.1.4.1.6 0 .2 0 .4-.1.6 0 .2-.1.3-.2.5l-.2.3-.2.3c-.2.2-.4.3-.6.4-.3.1-.5.2-.8.2s-.5-.1-.8-.2c-1.5-.5-2.9.3-3.5,1.5-.5,1-.4,2.2.3,3.1.7.9,1.8,1.3,2.9,1.1.2 0 .4 0 .6-.1.2-.1.4-.2.5-.3.2-.1.3-.3.4-.4.1-.2.2-.4.2-.6s0-.4-.1-.6l-.1-.5s0-.1 0-.1f"></path></svg>;

// --- Main Home Page Component ---
export default function Home() {

  // Custom styles for the neon effect, to avoid Tailwind config dependency.
  const customStyles = `
    .text-neon-blue {
      color: #00f3ff;
    }
    .bg-neon-blue {
      background-color: #00f3ff;
    }
    .shadow-neon-blue {
      box-shadow: 0 0 15px #00f3ff, 0 0 30px #00f3ff;
    }
    .shadow-neon-blue-light {
      box-shadow: 0 0 15px #00f3ff;
    }
    .hover\\:shadow-neon-blue-strong:hover {
      box-shadow: 0 0 25px #00f3ff, 0 0 50px #00f3ff;
    }
  `;

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <style>{customStyles}</style>
      <div className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
        {/* Header */}
        

        <main>
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-20 px-6 overflow-hidden">
             <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
             <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold text-neon-blue drop-shadow-[0_0_25px_#00f3ff]"
            >
              Learn. Build. Succeed.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300"
            >
              Your personalized Learning Management System with interactive courses, hands-on projects, and a supportive community.
            </motion.p>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                className="mt-12"
             >
                <img
                    src="https://source.unsplash.com/900x500/?cyberpunk,learning,technology"
                    alt="Learning hero"
                    className="rounded-2xl shadow-neon-blue-light"
                />
            </motion.div>
          </section>
          
          {/* Featured Courses Section */}
          <motion.section 
            id="courses" 
            className="py-20 px-6 bg-gradient-to-b from-black via-[#020617] to-black"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-neon-blue text-center mb-12">Featured Courses</h2>
            <div className="container mx-auto grid md:grid-cols-3 gap-8">
                {['Advanced JavaScript', 'React Deep Dive', 'Cybersecurity Essentials'].map(course => (
                    <motion.div 
                        key={course}
                        className="bg-[#0f172a]/50 p-6 rounded-2xl border border-blue-900/50 hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue-light"
                        whileHover={{ y: -10 }}
                    >
                        <BookOpenIcon />
                        <h3 className="text-2xl font-bold mt-4 mb-2 text-white">{course}</h3>
                        <p className="text-gray-400 mb-4">An in-depth course designed to take your skills to the next level.</p>
                        <a href="#" className="font-bold text-neon-blue inline-flex items-center">Learn More <ArrowRightIcon /></a>
                    </motion.div>
                ))}
            </div>
          </motion.section>

          {/* Testimonial Section */}
          <motion.section 
            id="testimonials" 
            className="py-20 px-6 text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-neon-blue mb-12">What Our Learners Say</h2>
            <div className="container mx-auto grid md:grid-cols-3 gap-8">
              {['Alex Johnson', 'Maria Garcia', 'Kenji Tanaka'].map((name) => (
                <div key={name} className="bg-[#0f172a] p-6 rounded-2xl shadow-neon-blue-light">
                  <QuoteIcon />
                  <p className="text-gray-300 italic">
                    “This LMS completely changed the way I learn. Highly interactive and beginner-friendly!”
                  </p>
                  <p className="mt-4 font-bold text-white">- {name}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            className="py-20 bg-gradient-to-t from-black via-[#020617] to-black text-center"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-neon-blue mb-6">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Hi, I’m <span className="text-neon-blue font-semibold">Satej Niwade</span>. Passionate about building impactful tech solutions and creating learning experiences for everyone.
            </p>
            <div className="flex justify-center gap-6">
                {[
                    { href: "https://github.com/SATEJ1909", label: "GitHub", icon: <GithubIcon /> },
                    { href: "https://linkedin.com/in/satej-niswade", label: "LinkedIn", icon: <LinkedinIcon /> },
                    { href: "https://twitter.com/satej1909", label: "Twitter", icon: <TwitterIcon /> }
                ].map(social => (
                     <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon-blue hover:drop-shadow-[0_0_10px_#00f3ff] transition-all duration-300"
                        aria-label={social.label}
                        whileHover={{ scale: 1.2, y: -5 }}
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>
          </motion.section>
        </main>
        
        {/* Footer */}
        <footer className="border-t border-blue-900/50 text-center py-8">
            <div className="container mx-auto">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Learnify. Built by Satej Niwade.</p>
            </div>
        </footer>
      </div>
    </>
  );
}
