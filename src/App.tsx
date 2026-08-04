

import { motion } from "framer-motion";
import { SiDavinciresolve} from "react-icons/si";
import workstation from "@/assets/workstation.jpg";
import {
  ArrowRight,
  User,
  Mail,
  Palette,
  Scissors,
  Clapperboard,
} from "lucide-react";
import {
  SiInstagram,
  SiYoutube,
} from "react-icons/si";
import heroPortrait from "@/assets/hero-portrait.png";
import aboutPortrait from "@/assets/about.png";
import cinematicVideo from "@/assets/loops.mp4";
import travelVideo from "@/assets/roadtrip.mp4";
import youtubeVideo from "@/assets/nationaltre.mp4";
import reelVideo from "@/assets/gannekajuice.mp4";
import commercialVideo from "@/assets/potential.mp4";





const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Navbar() {
  const links = [
    "Home",
    "About",
    "Skills",
    "Work",
    "Contact",
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-[0.2em] text-sm">
          <span className="text-primary">YASH</span> <span className="text-white">MALVIYA</span>
        </a>
        <ul className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {links.map((l, i) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className={`hover:text-white transition-colors ${i === 0 ? "text-primary relative" : ""}`}
              >
                {l}
                {i === 0 && <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          whileHover={{ scale: 1.03 }}
          href="#contact"
          className="border border-primary text-white text-sm px-5 py-2 rounded-full hover:bg-primary/10 transition-colors"
        >
          Let's Connect
        </motion.a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-stretch"
    >
      <div className="grid lg:grid-cols-2 w-full">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[60vh] lg:h-screen"
        >
          <img
            src={heroPortrait}
            alt="Yash Malviya"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative flex items-center px-8 lg:px-16 py-20 lg:py-0">
          <div className="max-w-xl">

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.05]"
            >
              Hiii,
            </motion.h1>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-5xl lg:text-7xl font-bold leading-[1.05]"
            >
              This is
            </motion.h1>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl lg:text-7xl font-bold text-primary"
            >
              Yash Malviya
            </motion.h2>

            <div className="mt-6 flex flex-wrap gap-3 text-sm lg:text-base font-medium">
              <span>Video Editor</span>
              <span className="text-primary">|</span>
              <span>Content Creator</span>
              <span className="text-primary">|</span>
              <span>Visual Storyteller</span>
            </div>

            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              I create cinematic visuals, engaging edits, and compelling stories
              that capture attention and leave a lasting impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                href="#work"
                className="bg-primary text-white px-7 py-3 rounded-full flex items-center gap-3"
              >
                View My Work
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                href="#contact"
                className="border border-border text-white px-7 py-3 rounded-full flex items-center gap-3"
              >
                Contact Me
                <User size={18} />
              </motion.a>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 flex-col gap-5">
            {[SiInstagram, SiYoutube, Mail].map((Icon, i) => (
              <a key={i} href="#">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children, accent }: { children: string; accent: string }) {
  return (
    <div className="relative inline-block">
      <h2 className="text-3xl md:text-4xl font-bold">
        {children} <span className="text-primary">{accent}</span>
      </h2>
      <span className="block w-12 h-0.5 bg-primary mt-2" />
    </div>
  );
}

function CreativeStack() {
  const items = [
    {
      name: "DaVinci Resolve",
      icon: <SiDavinciresolve className="text-primary" size={60} />,
    },
    {
      name: "Color Grading",
      icon: <Palette className="text-primary" size={60} />,
    },
    {
      name: "CapCut",
      icon: <Scissors className="text-primary" size={60} />,
    },
    {
      name: "Creative Storytelling",
      icon: <Clapperboard className="text-primary" size={60} />,
    },
    {
      name: "YouTube Content",
      icon: <SiYoutube className="text-primary" size={60} />,
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-[1600px] mx-auto px-8 lg:px-16 py-24"
    >
      <motion.div {...fadeUp} className="text-center">
        <SectionTitle accent="Stack">My Creative</SectionTitle>
      </motion.div>

      <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
            }}
            whileHover={{
              y: -8,
              scale: 1.05,
            }}
            className="flex flex-col items-center justify-center text-center min-h-[220px]"
          >
            <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            <p className="text-base md:text-lg font-semibold">
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="w-full py-24">
      <div
        className="relative overflow-hidden px-6 lg:px-20 py-16 lg:py-24"
        style={{
          background:
            "linear-gradient(180deg, #0A0A0A 0%, #080808 100%)",
        }}
      >
        {/* Background ABOUT Text */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <span
            className="font-black leading-none tracking-wide"
            style={{
              fontSize: "clamp(5rem, 14vw, 12rem)",
              color: "#ff2a2a",
              opacity: 0.04,
            }}
          >
            ABOUT
          </span>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden relative min-h-[500px] flex items-center justify-center">

          {/* Faded Background Image */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img
              src={aboutPortrait}
              alt="About Yash"
              loading="lazy"
              className="w-[180px] opacity-[0.01]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-2 gap-x-2 gap-y-8 w-full text-center">

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.18em] text-primary">
                EDUCATION
              </h4>
              <p className="mt-2 text-xs text-white/90">
                B.Tech '28
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.18em] text-primary">
                EXPERIENCE
              </h4>
              <p className="mt-2 text-xs text-white/90">
                Independent Projects
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.18em] text-primary">
                ACHIEVEMENTS
              </h4>
              <p className="mt-2 text-xs text-white/90">
                Content Creation
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.18em] text-primary">
                LANGUAGES
              </h4>
              <p className="mt-2 text-xs text-white/90">
                English, Hindi
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.18em] text-primary">
                SOFTWARE
              </h4>
              <p className="mt-2 text-xs text-white/90">
                DaVinci Resolve
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold tracking-[0.18em] text-primary">
                CONTACT
              </h4>
              <p className="mt-2 text-xs text-white/90">
                Connect Section
              </p>
            </div>

            <div className="col-span-2">
              <h4 className="text-[11px] font-bold tracking-[0.18em] text-primary">
                INTERESTS
              </h4>
              <p className="mt-2 text-xs text-white/90">
                Visual Storytelling
              </p>
            </div>

          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.6fr_1fr] gap-16 items-center">

          {/* Left Side */}
          <div className="space-y-14">
            <Block title="EDUCATION" lines={["B.Tech '28"]} />

            <Block
              title="EXPERIENCE"
              lines={[
                "Independent Projects",
                "Creative Collaborations",
              ]}
            />

            <Block
              title="ACHIEVEMENTS"
              lines={[
                "Content Creation",
                "Video Editing Journey",
              ]}
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center h-full">
            <img
              src={aboutPortrait}
              alt="About Yash"
              loading="lazy"
              className="w-full max-w-[1100px] scale-125"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, black 0%, black 75%, transparent 100%)",
              }}
            />
          </div>

          {/* Right Side */}
          <div className="space-y-14 lg:text-right">
            <Block
              title="LANGUAGES"
              lines={[
                "English",
                "Hindi",
                "Marathi",
                "Python",
              ]}
            />

            <Block
              title="SOFTWARE"
              lines={[
                "DaVinci Resolve",
                "CapCut",
              ]}
            />

            <Block
              title="CONTACT"
              lines={[
                "Visit Connect Section",
              ]}
            />

            <Block
              title="INTERESTS"
              lines={[
                "Content Creation",
                "Visual Storytelling",
              ]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function Block({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-bold tracking-[0.2em]" style={{ color: "var(--primary)" }}>
        {title}
      </h4>
      <div className="mt-3 space-y-1 text-sm text-white/90">
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
    </div>
  );
}

function FeaturedWork() {
  const cards = [
    {
      title: "Cinematic Edit",
      tag: "Cinematic",
      video: cinematicVideo,
    },
    {
      title: "Travel Film",
      tag: "Travel",
      video: travelVideo,
    },
    {
      title: "YouTube Video",
      tag: "YouTube",
      video: youtubeVideo,
    },
    {
      title: "Instagram Reel",
      tag: "Reels",
      video: reelVideo,
    },
    {
      title: "Commercial Ad",
      tag: "Commercial",
      video: commercialVideo,
    },
  ];

  return (
    <section
      id="work"
      className="w-full py-24 overflow-hidden"
    >
      <div className="px-6 lg:px-10">
        <div className="flex items-end justify-between">
          <motion.div {...fadeUp}>
            <SectionTitle accent="Work">
              Featured
            </SectionTitle>
          </motion.div>

          <a
            href="#"
            className="text-sm text-white hover:text-primary flex items-center gap-2"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="mt-12 overflow-hidden border border-border">
        <div className="marquee-track gap-0">
          {[...cards, ...cards].map((c, i) => (
            <div
              key={`${c.title}-${i}`}
              className="w-[350px] shrink-0"
            >
              <div className="overflow-hidden bg-card border-r border-border last:border-r-0">
                <div className="relative aspect-video overflow-hidden">
                  <video
                    src={c.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>

            

                
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 lg:px-10 py-16"
    >
      <div className="bg-card/40 border border-border rounded-2xl p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let's <span className="text-primary">Connect</span>
          </h2>

          <p className="mt-5 text-muted-foreground max-w-md">
            Have a project in mind, collaboration opportunity,
            or just want to say hello? I'd love to hear from you.
          </p>

          <ul className="mt-10 space-y-5">
            <li className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-primary">
                <Mail size={18} />
              </span>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yashmalviya8689@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"

              >
                yashmalviya8689@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-primary">
                <SiInstagram size={18} />
              </span>
              <a
                href="https://instagram.com/yash.perspective"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                @yash.perspective
              </a>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-primary">
                <SiYoutube size={18} />
              </span>
              <a
                href="https://youtube.com/@yashmalviya22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                youtube.com/@yashmalviya22
              </a>
            </li>
          </ul>

          <div className="mt-10">
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yashmalviya8689@gmail.com"
              target ="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full hover:shadow-[0_0_30px_-5px_#ff2a2a] transition-shadow"
            >
              <Mail size={18} />
              Let's Connect
            </motion.a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 55% at 60% 55%, rgba(255,42,42,0.35) 0%, rgba(255,42,42,0.12) 40%, rgba(5,5,5,0) 75%)",
              filter: "blur(24px)",
            }}
          />

          <img
            src={workstation}
            alt="Creative Workstation"
            loading="lazy"
            className="w-full h-full object-cover"
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 85% at 50% 50%, #000 40%, rgba(0,0,0,0.5) 72%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 85% at 50% 50%, #000 40%, rgba(0,0,0,0.5) 72%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-10">
        © 2026 Yash Malviya. All Rights Reserved.
      </p>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <CreativeStack />
        <About />
        <FeaturedWork />
        <Contact />
      </main>
    </div>
  );
}
export default App;
