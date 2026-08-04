import { motion } from "framer-motion";
import { ArrowRight, User, Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import heroImg from "@/assets/hero-red.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-stretch">
      <div className="absolute -left-40 top-1/3 w-[600px] h-[600px] rounded-full bg-primary/30 blur-[140px] red-pulse pointer-events-none" />

      <div className="grid lg:grid-cols-2 w-full">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[60vh] lg:h-screen"
        >
          <img
            src={heroImg}
            alt="Yash Malviya portrait in red cinematic light"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
        </motion.div>

        <div className="relative flex items-center px-8 lg:px-16 py-20 lg:py-0">
          <div className="max-w-xl">
            {["Hiii,", "This is"].map((t, i) => (
              <motion.h1
                key={t}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
                className="text-5xl lg:text-7xl font-bold leading-[1.05] text-white"
              >
                {t}
              </motion.h1>
            ))}
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="text-5xl lg:text-7xl font-bold text-primary leading-[1.05] mt-1"
              style={{ textShadow: "0 0 40px rgba(255,42,42,0.4)" }}
            >
              Yash Malviya
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-sm lg:text-base font-medium text-white"
            >
              <span>Video Editor</span>
              <span className="text-primary">|</span>
              <span>Content Creator</span>
              <span className="text-primary">|</span>
              <span>Visual Storyteller</span>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="mt-6 text-muted-foreground leading-relaxed text-sm lg:text-base"
            >
              I create cinematic visuals, engaging edits, and compelling stories that capture
              attention and leave a lasting impact. Let's bring your ideas to life through the
              power of editing.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-medium hover:red-glow-strong transition-all hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-all"
              >
                Contact Me
                <User className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-5"
          >
            <div className="w-px h-16 bg-white/20" />
            {[Instagram, Youtube, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="text-white/70 hover:text-primary transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
            <div className="w-px h-16 bg-white/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
