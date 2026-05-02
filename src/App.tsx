/**
 * @format
 * @license SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, ArrowDown } from "lucide-react";
import { useState, useRef } from "react";

import artifact1 from "./assets/images/artifact_1.jpg";
import artifact6 from "./assets/images/artifact_6.png";
import artifact9 from "./assets/images/artifact_9.png";
import artifact11 from "./assets/images/artifact_11.png";
import artifact13 from "./assets/images/artifact_13.png";
import artifact14 from "./assets/images/artifact_14.png";
import artifact17 from "./assets/images/artifact_17.png";
import artifact18 from "./assets/images/artifact_18.png";
import artifact19 from "./assets/images/artifact_19.png";

// --- Components ---

const Marquee = ({
  text,
  reverse = false,
}: {
  text: string;
  reverse?: boolean;
}) => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-brand-red bg-brand-cream py-4 md:py-6">
      <div
        className={`flex animate-marquee whitespace-nowrap ${reverse ? "direction-reverse" : ""}`}
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-3 text-lg md:text-2xl font-display uppercase tracking-widest text-brand-red"
          >
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            {text}
          </span>
        ))}
      </div>
      <div
        className={`absolute top-4 md:top-6 flex animate-marquee whitespace-nowrap ${reverse ? "direction-reverse" : ""}`}
        aria-hidden="true"
      >
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="mx-4 flex items-center gap-3 text-lg md:text-2xl font-display uppercase tracking-widest text-brand-red"
          >
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

const SectionTitle = ({ number, title }: { number: string; title: string }) => (
  <div className="mb-12 flex flex-col gap-2 md:mb-20">
    <span className="font-technical text-sm opacity-60 md:text-base">
      [{number}]
    </span>
    <h2 className="text-5xl font-extrabold leading-none md:text-8xl lg:text-9xl">
      {title}
    </h2>
  </div>
);

interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  tags: string[];
  reverse?: boolean;
}

const ProjectCard = ({
  number,
  title,
  description,
  link,
  imageUrl,
  tags,
  reverse = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col gap-8 md:flex-row md:items-center ${reverse ? "md:flex-row-reverse" : ""} py-16 md:py-32 border-b border-brand-red/20`}
    >
      <div className="flex-1 space-y-6">
        <div className="flex items-center gap-4">
          <span className="font-accent text-3xl md:text-5xl opacity-20">
            {number}
          </span>
          <h3 className="text-3xl font-display md:text-5xl lg:text-6xl tracking-tighter leading-tight">
            {title}
          </h3>
        </div>
        <p className="max-w-md text-lg leading-relaxed opacity-80 md:text-xl">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-brand-red px-3 py-1 text-xs font-technical uppercase md:px-4 md:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-lg font-semibold underline underline-offset-8 transition-all hover:gap-4"
        >
          View Case Study
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-2xl bg-neutral-200 aspect-[4/3] group cursor-pointer shadow-2xl shadow-brand-red/5">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-red opacity-0 transition-opacity group-hover:opacity-10" />
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      number: "01/03",
      title: "SKINCARE BRAND.",
      description:
        "A clean and modern UI/UX design for a skincare mobile app focusing on smooth navigation and premium aesthetics. The design highlights product efficacy through minimal layouts and targeted user flows.",
      link: "https://www.behance.net/gallery/222861207/Skincare-Brand",
      imageUrl: artifact11,
      tags: ["UI/UX", "MOBILE APP", "BEAUTY"],
    },
    {
      number: "02/03",
      title: "DIGISKILLS.PK",
      description:
        "A comprehensive redesign of the DigiSkills.pk platform, improving accessibility and visual hierarchy. Focused on making online learning more engaging for the Pakistani youth through modern interface standards.",
      link: "https://www.behance.net/gallery/238263577/-DigiSkillspk-Homepage-Redesign-Concept",
      imageUrl: artifact9,
      tags: ["WEB REDESIGN", "EDTECH", "UX CASE STUDY"],
      reverse: true,
    },
    {
      number: "03/03",
      title: "GLOBEGO",
      description:
        "GlobeGo travel app consists of 21+ high-fidelity screens designed to streamline trip planning. Features include destination discovery, flight booking, and personalized travel itineraries within an intuitive dark/light UI.",
      link: "https://www.behance.net/gallery/234117129/Travel-Agency-App-Design",
      imageUrl: artifact6,
      tags: ["APP DESIGN", "TRAVEL", "21+ SCREENS"],
    },
  ];

  const SunShape = ({ className }: { className?: string }) => (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="50"
          x2="50"
          y2="0"
          transform={`rotate(${i * 15} 50 50)`}
          strokeWidth="1"
        />
      ))}
    </svg>
  );

  const StarShape = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 0L55 45L100 50L55 55L50 100L45 55L0 50L45 45L50 0Z" />
    </svg>
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen selection:bg-brand-red selection:text-brand-cream font-body bg-brand-cream"
    >
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1600px] items-start justify-between">
          <div className="flex flex-col gap-1 items-start">
            <a
              href="https://www.instagram.com/uiux_nemo?igsh=MTk3aGtvYXAxODRr&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-body font-medium uppercase tracking-widest text-brand-red hover:opacity-60 transition-opacity"
            >
              <span className="text-xl">♥</span> send a request
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-1/2 -translate-x-1/2 text-2xl font-display font-bold tracking-tight text-brand-red md:text-3xl"
          >
            NIMAL KALHORO
          </motion.div>

          <div className="hidden flex-col items-end gap-1 md:flex text-right">
            {["home", "about", "project", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item === "project" ? "projects" : item)}
                className="text-xs font-technical font-bold uppercase tracking-[0.2em] transition-colors hover:text-brand-red/50"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-brand-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <main>
        {/* Full Hero Section */}
        <section
          id="home"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20"
        >
          {/* Decorative Shapes */}
          <SunShape className="absolute top-[10%] left-[20%] h-32 w-32 text-brand-red opacity-40 animate-spin-slow" />
          <StarShape className="absolute top-[15%] right-[25%] h-12 w-12 text-brand-red opacity-30" />
          <StarShape className="absolute bottom-[25%] left-[10%] h-16 w-16 text-brand-red opacity-20" />
          <SunShape className="absolute bottom-[10%] right-[35%] h-40 w-40 text-brand-red opacity-30 animate-reverse-spin-slow" />

          <div className="relative z-10 mx-auto w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            <div className="order-2 md:order-1 flex flex-col justify-end h-full">
              <h2 className="font-display text-[8vw] md:text-7xl lg:text-8xl font-black leading-[0.8] tracking-tighter text-brand-red">
                HEY,
                <br /> I’M NIMAL
              </h2>
              <p className="mt-12 max-w-[280px] text-sm md:text-base leading-relaxed opacity-80 decoration-brand-red/30 underline underline-offset-4 font-medium">
                I’m a UI/UX designer focused on designing visually clean
                interfaces and seamless user experiences.
              </p>
            </div>

            <div className="relative order-1 md:order-2 flex justify-center py-12 md:py-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Background Decor Behind Nimal */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-brand-red/5 rounded-full blur-3xl -z-10" />
                <SunShape className="absolute -top-10 -left-10 h-40 w-40 text-brand-red opacity-10 animate-spin-slow -z-10" />

                {/* Person Cutout */}
                <img
                  src={artifact14}
                  alt="Nimal"
                  className="relative z-10 w-[240px] md:w-[380px] lg:w-[450px] drop-shadow-2xl"
                />

                {/* Laptop Cutout (Floating/Overlay) */}
                <motion.img
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={artifact13}
                  alt="Laptop"
                  className="absolute -bottom-10 -right-16 z-20 w-[180px] md:w-[260px] lg:w-[320px] drop-shadow-2xl"
                />
              </motion.div>
            </div>

            <div className="order-3 flex flex-col justify-end md:items-end h-full text-left md:text-right">
              <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter text-brand-red">
                USER INTERFACE / <br /> USER EXPERIENCE <br /> DESIGNER
              </h3>
            </div>
          </div>
        </section>

        {/* Marquee Strip */}
        <section className="border-t border-brand-red/10">
          <Marquee text="UI DESIGNER" />
        </section>

        {/* My Process Section */}
        <section id="about" className="py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            <div className="mb-16">
              <h2 className="text-6xl md:text-9xl font-display font-black tracking-tighter text-brand-red leading-none">
                MY PROCESS
              </h2>
              <p className="mt-4 text-sm md:text-xl font-medium tracking-tight text-brand-red/60 uppercase">
                I apply design-thinking principles in my UI/UX work to craft
                experiences that truly solve user problems.
              </p>
            </div>

            <div className="flex flex-col border border-brand-red/10">
              {[
                {
                  title: ". BRIEF",
                  desc: "I begin by understanding the project vision, business objectives, target audience, and technical constraints. This step helps align design goals with business needs and ensures clarity before moving forward.",
                },
                {
                  title: ". RESEARCH",
                  desc: "I conduct user research and competitor analysis to gain insights into user behavior, expectations, and pain points. This research-driven approach helps identify opportunities and informs data-backed design decisions.",
                },
                {
                  title: ". DESIGN",
                  desc: "Based on research insights, I create user flows, wireframes, and high-fidelity UI designs. My focus remains on usability, accessibility, visual consistency, and creating intuitive user experiences.",
                },
                {
                  title: ". TEST & ITERATE",
                  desc: "I test designs through usability testing and feedback sessions to validate design decisions. Based on insights, I iterate and refine the solution to ensure an improved, user-centered experience.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ backgroundColor: "#bd2e15", color: "#f4f4ec" }}
                  className="group grid grid-cols-1 md:grid-cols-3 border-b border-brand-red/10 p-10 md:p-16 transition-colors duration-300"
                >
                  <div className="text-4xl md:text-6xl font-display font-bold tracking-tighter mb-4 md:mb-0">
                    {step.title}
                  </div>
                  <div className="md:col-span-2 text-base md:text-lg opacity-80 leading-relaxed font-body">
                    {step.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Smart Glasses Spotlight Section */}
        <section className="pt-12 pb-24 md:pt-16 md:pb-48 bg-brand-cream border-y border-brand-red/5">
          <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
            <div className="relative inline-block mb-12 w-full">
              {/* New image div before the button */}
              <div className="mb-20 flex justify-center">
                <img
                  src={artifact1}
                  alt="Display"
                  className="w-full max-w-5xl h-[400px] md:h-[600px] object-cover rounded-3xl shadow-3xl"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 z-10"
              >
                <a
                  href="https://www.behance.net/gallery/235656833/Smart-Glasses-Website-Design-Futuristic-UIUX-Concept"
                  target="_blank"
                  className="bg-brand-red text-white py-4 px-12 rounded-full font-bold uppercase tracking-widest text-sm md:text-base hover:shadow-2xl transition-all block"
                >
                  View on Behance
                </a>
              </motion.div>
            </div>

            <h2 className="text-5xl md:text-[8vw] font-display font-black tracking-tighter text-brand-red mt-12 md:mt-20 leading-none">
              SMART GLASSES - HOMEPAGE DESIGN
            </h2>
            <p className="mt-8 text-lg md:text-2xl font-bold uppercase tracking-tight text-brand-red">
              Creating the future of vision through clean and modern UI.
            </p>
            <p className="mt-6 max-w-4xl mx-auto text-sm md:text-base opacity-70 leading-relaxed font-medium">
              This project is a conceptual homepage design created for a smart
              glasses brand. The goal was to design a visually clean and
              futuristic interface that highlights the product, enhances brand
              identity, and delivers a smooth first impression.
            </p>
          </div>
        </section>

        {/* Floating Marquee Between Projects */}
        <div className="border-y border-brand-red/10 overflow-hidden">
          <Marquee text="FOR MORE INFORMATION CONTACT WITH ME" />
        </div>

        {/* Selected Projects List */}
        <section id="projects" className="py-24 md:py-48 bg-white/50">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-16 md:gap-32 py-24 border-b border-brand-red/10 ${project.reverse ? "md:flex-row-reverse" : ""}`}
              >
                <StarShape className="absolute top-10 left-10 h-8 w-8 text-brand-red opacity-20" />
                <StarShape className="absolute bottom-10 right-10 h-10 w-10 text-brand-red opacity-10" />

                <div className="flex-1 w-full flex justify-center items-center">
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotate: project.reverse ? -1 : 1,
                    }}
                    className="relative w-full max-w-7xl h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden rounded-2xl"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover drop-shadow-2xl"
                    />
                    {/* Decorative red dot */}
                    <div className="absolute -top-4 -right-4 h-12 w-12 rounded-full border border-brand-red/20 flex items-center justify-center">
                      <StarShape className="h-4 w-4 text-brand-red" />
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 space-y-8">
                  <div className="flex justify-between items-end">
                    <h3 className="text-5xl md:text-7xl font-accent tracking-tighter text-brand-red">
                      {project.title}
                    </h3>
                    <span className="font-technical text-brand-red text-xl font-bold opacity-50">
                      {project.number}
                    </span>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed text-brand-red/80 font-medium">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-block text-lg font-bold underline underline-offset-8 text-brand-red hover:opacity-60 transition-opacity"
                  >
                    {project.link}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Stacks Section */}
        <section
          id="about-details"
          className="py-24 md:py-48 bg-brand-cream overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-6xl md:text-[10vw] font-display font-black tracking-tighter text-brand-red leading-none mb-12">
              DESIGNER - CREATOR
            </h2>
            <p className="max-w-5xl mx-auto text-sm md:text-base font-medium opacity-80 leading-relaxed space-y-6 text-brand-red uppercase tracking-tight">
              I’m a UX designer with 1.5 years of hands-on experience, working
              on personal projects, in-depth case studies, and strategic product
              redesigns across a range of digital products. I’ve built a strong
              foundation through short professional UX/UI courses and consistent
              real-world practice.
              <br />
              <br />
              I specialize in designing clear, intuitive, and user-focused
              experiences, covering the full design process from research and
              wireframes to polished UI. I also create micro-interactions,
              micro-animations, and animated landing pages that elevate
              usability and add meaningful motion to interfaces.
              <br />
              <br />I approach design with confidence, curiosity, and a
              problem-solving mindset, continuously refining my work through
              testing, feedback, and iteration.
            </p>

            <div className="mt-24 relative flex justify-center items-center h-[500px]">
              {/* Photo Stack Implementation */}
              {[
                { src: artifact17, rotate: -8, x: -40 },
                { src: artifact18, rotate: 0, x: 0 },
                { src: artifact19, rotate: 8, x: 40 },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ rotate: img.rotate, x: img.x, y: i * 10 }}
                  whileHover={{ rotate: 0, y: -40, zIndex: 50, scale: 1.1 }}
                  className="absolute w-[300px] md:w-[450px] aspect-video bg-white p-2 shadow-2xl border border-brand-red/10 cursor-pointer"
                >
                  <img
                    src={img.src}
                    alt={`Process work ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contact"
          className="py-24 md:py-48 bg-brand-cream/80 border-t border-brand-red/5"
        >
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-7xl md:text-[12vw] font-display font-black text-brand-red leading-none tracking-tighter">
                LETS <br />
                CHAT!
              </h2>
              <p className="text-xl font-bold text-brand-red opacity-60">
                I’m available for new projects and collaborations
              </p>

              <div className="pt-12 relative flex items-center justify-start h-[300px]">
                {/* Floating Social Oval */}
                <div className="relative border border-brand-red/40 rounded-[50%] w-full max-w-[450px] h-[300px] flex flex-col justify-center items-center -rotate-12">
                  <div className="rotate-12 text-left space-y-1">
                    <p className="font-technical text-[10px] uppercase tracking-widest opacity-40 mb-4">
                      You can also find me here
                    </p>
                    <div className="space-y-4">
                      <a
                        href="https://www.behance.net/nimalkalhoro1"
                        target="_blank"
                        className="flex items-center gap-4 group"
                      >
                        <span className="w-10 h-10 border border-brand-red rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-brand-red group-hover:text-white transition-all">
                          Bē
                        </span>
                        <span className="text-xl font-bold underline underline-offset-4 decoration-brand-red/30">
                          Behance
                        </span>
                      </a>
                      <a
                        href="https://www.fiverr.com/nimalkalhoro"
                        target="_blank"
                        className="flex items-center gap-4 group"
                      >
                        <span className="w-10 h-10 border border-brand-red rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-brand-red group-hover:text-white transition-all">
                          fi
                        </span>
                        <span className="text-xl font-bold underline underline-offset-4 decoration-brand-red/30">
                          Fiverr
                        </span>
                      </a>
                      <a
                        href="https://www.instagram.com/uiux_nemo"
                        target="_blank"
                        className="flex items-center gap-4 group"
                      >
                        <span className="w-10 h-10 border border-brand-red rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-brand-red group-hover:text-white transition-all">
                          <InstagramIcon size={16} />
                        </span>
                        <span className="text-xl font-bold underline underline-offset-4 decoration-brand-red/30">
                          Instagram
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <form
                className="space-y-12"
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.currentTarget;

                  const name =
                    form.querySelector('input[placeholder="Your name"]')
                      ?.value || "";
                  const email =
                    form.querySelector('input[placeholder="Your email"]')
                      ?.value || "";
                  const message = form.querySelector("textarea")?.value || "";

                  const subject = encodeURIComponent(
                    `Project Inquiry from ${name}`,
                  );
                  const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                  );

                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nimalxkalhoro@gmail.com&su=${subject}&body=${body}`;

                  window.open(gmailUrl, "_blank");
                }}
              >
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-brand-red/50 py-4 text-2xl font-bold outline-none placeholder:text-brand-red/20 focus:border-brand-red transition-all"
                    required
                  />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-brand-red/50 py-4 text-2xl font-bold outline-none placeholder:text-brand-red/20 focus:border-brand-red transition-all"
                    required
                  />
                </div>
                <div className="relative group">
                  <textarea
                    placeholder="Your message"
                    rows={4}
                    className="w-full bg-transparent border-b border-brand-red/50 py-4 text-2xl font-bold outline-none placeholder:text-brand-red/20 focus:border-brand-red transition-all resize-none"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{
                    backgroundColor: "transparent",
                    color: "#bd2e15",
                  }}
                  type="submit"
                  className="w-full md:w-3/4 rounded-full border-2 border-brand-red bg-brand-red py-6 text-xl font-bold text-white tracking-widest transition-all"
                >
                  Send a request
                </motion.button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-brand-red py-24 text-white">
          <div className="mx-auto max-w-[1600px] px-6 text-center opacity-30 font-technical text-[10px] tracking-[0.8em]">
            THANKS FOR VISITING • NIMAL KALHORO • 2026
          </div>
        </footer>
      </main>

      <div className="pointer-events-none fixed inset-0 z-[100] w-full h-full opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </div>
  );
}

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
