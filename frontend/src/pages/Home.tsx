import { motion } from "framer-motion";
import { ArrowRight, Quote, BookOpen, Github, Linkedin, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Hero Section */}
      <section
        data-testid="hero-section"
        className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden"
      >
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

        {/* Animated hero image */}
        <motion.img
          src="https://source.unsplash.com/900x500/?technology,learning"
          alt="Learning hero"
          className="mt-12 rounded-2xl shadow-[0_0_35px_#00f3ff]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Courses Section */}
      <section
        data-testid="courses-section"
        className="py-20 bg-gradient-to-b from-black via-[#020617] to-black text-center"
      >
        <h2 className="text-4xl font-bold text-neon-blue mb-6">Explore Our Courses</h2>
        <p className="text-gray-400 mb-8">Learn from experts and build real-world skills.</p>

        {/* Using <a> to avoid Router requirement; works without react-router */}
        <motion.a
          href="/courses"
          aria-label="Browse Courses"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 mx-auto bg-neon-blue text-white font-bold px-6 py-3 rounded-xl shadow-[0_0_25px_#00f3ff]"
          data-testid="browse-courses-link"
        >
          <BookOpen /> Browse Courses <ArrowRight />
        </motion.a>
      </section>

      {/* Testimonial Section */}
      <section data-testid="testimonials-section" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-neon-blue mb-12">What Our Learners Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((t) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#0f172a] p-6 rounded-2xl shadow-[0_0_25px_#00f3ff]"
            >
              <Quote className="w-8 h-8 text-neon-blue mb-4 mx-auto" />
              <p className="text-gray-300 italic">
                “This LMS completely changed the way I learn. Highly interactive and beginner-friendly!”
              </p>
              <p className="mt-4 font-bold text-white">Learner {t}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        data-testid="about-section"
        className="py-20 bg-gradient-to-t from-black via-[#020617] to-black text-center"
      >
        <h2 className="text-4xl font-bold text-neon-blue mb-6">About Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Hi, I’m <span className="text-neon-blue font-semibold">Satej Niwade</span>. Passionate about building impactful tech solutions and creating learning experiences for everyone.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-blue transition"
            aria-label="GitHub"
          >
            <Github size={28} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-blue transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neon-blue transition"
            aria-label="Twitter"
          >
            <Twitter size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}
