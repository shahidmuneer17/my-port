
import React from "react";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Link as LinkIcon,
  LogIn, Calendar, Briefcase, Server, MonitorSmartphone, Cpu, Database, ShieldCheck, Cloud,
  ChevronLeft, ChevronRight, Image as ImageIcon,
  House, Hammer, Layers, Images, Info, Sun, Moon
} from "lucide-react";

const spring = { type: "spring", stiffness: 60, damping: 14, mass: 0.6 };
const reveal = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const DATA = {
  name: "Shahid Munir",
  title: "Full Stack Developer",
  location: "Dubai, UAE (Open to relocation)",
  phone: "+971-561095772",
  email: "shahidmuneer17@gmail.com",
  links: {
    github: "https://github.com/shahidmuneer17",
    linkedin: "https://linkedin.com/in/shahid-muneer-239470195/",
    resume: "#",
  },
  summary: "Highly skilled and versatile Full Stack Developer with 10+ years’ experience across banking, SaaS, and Web3/Blockchain. Expert in Laravel, React, Vue, Node, and AWS; strong in API design, secure architectures, and cloud-native delivery.",
  skills: [
    { label: "Frontend", items: ["React.js", "Vue.js", "Angular", "HTML5", "Tailwind CSS", "Material-UI"], icon: <MonitorSmartphone className="size-5" /> },
    { label: "Backend", items: ["PHP", "Laravel", "Node.js", "REST APIs", "SaaS Architectures", "Web3 integration"], icon: <Server className="size-5" /> },
    { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"], icon: <Database className="size-5" /> },
    { label: "DevOps / Infra", items: ["AWS", "NGINX", "Docker", "CI/CD"], icon: <Cloud className="size-5" /> },
  ],
  experience: [
    {
      role: "Database and Application Developer",
      company: "Syncom Technology DIFC – Dubai, UAE",
      time: "Nov 2023 – Present",
      bullets: [
        "Led full-stack development for cloud-native banking & blockchain platforms using Laravel, React, Angular, and Flutter.",
        "Designed SaaS wallet systems, transaction tools, and real-time reporting dashboards.",
        "Built secure REST APIs & microservices, integrated Web3.js features.",
        "Managed AWS (EC2, RDS, S3) and optimized NGINX for high availability.",
      ],
    },
  ],
  projects: [
    {
      name: "Cloud-Native Banking Wallet (SaaS)",
      description: "Multi-tenant wallet with role-based access and real-time transaction dashboards.",
      tech: ["Laravel", "React", "AWS", "RDS", "Docker"],
      screenshot: "/images/projects/wallet-saas.png",
      liveUrl: "https://example.com/wallet-saas",
      repoUrl: "",
      demo: { username: "demo@company.com", password: "Demo@123" },
    },
  ],
  gallery: [
    { name: "Developing Code", image: "/images/gallery/code.jpg" },
    { name: "Database Structuring", image: "/images/gallery/dbstructure.jpg" },
    { name: "Github CI/CD Management", image: "/images/gallery/github.jpg" },
    { name: "Fintech Website", image: "/images/gallery/metax.png" },
    { name: "Fintech Website", image: "/images/gallery/metax2.jpg" },
    { name: "Fintech Website", image: "/images/gallery/metax3.jpg" },
    { name: "Fintech Website", image: "/images/gallery/metaxfx.jpg" },
    { name: "Fintech Website", image: "/images/gallery/metaxfx2.jpg" },
    { name: "Fintech Website", image: "/images/gallery/metaxfx3.jpg" },
    { name: "Fintech Admin Portal UI", image: "/images/gallery/metaxfx4.jpg" },
    { name: "Fintech Admin Portal UI", image: "/images/gallery/metaxfx5.jpg" },
    { name: "Fintech Admin Portal UI", image: "/images/gallery/metaxfx6.jpg" },
    { name: "Crypto Exchange Website", image: "/images/gallery/myxpd.jpg" },
    { name: "Crypto Exchange Website", image: "/images/gallery/myxpd2.jpg" },
    { name: "Fintech Dashboard UI", image: "/images/gallery/sb.jpg" },
    { name: "Fintech Portal", image: "/images/gallery/sb1.jpg" },
    { name: "Fintech Portal", image: "/images/gallery/sb2.jpg" },
    { name: "Fintech Portal", image: "/images/gallery/sb3.jpg" },
    { name: "Crypto Card App Android IOS", image: "/images/gallery/xpdapp.jpg" },
    { name: "Fintech App Android IOS", image: "/images/gallery/metaxapp.jpg" },
    { name: "Fintech User Portal UI", image: "/images/gallery/sb4.jpg" },
  ],
};

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
      className="text-3xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-sky-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">{title}</motion.h2>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/70 backdrop-blur px-3 py-1 text-xs sm:text-sm leading-6 mr-2 mb-2 shadow-sm hover:shadow transition-transform duration-300 will-change-transform hover:-translate-y-0.5">{children}</span>
);

// NEW: Navbar with icons, active state highlight, and working theme toggle
function Navbar({ dark, setDark }) {
  const items = [
    { id: "about", label: "About", icon: <Info className="size-4" /> },
    { id: "skills", label: "Skills", icon: <Hammer className="size-4" /> },
    { id: "experience", label: "Experience", icon: <Layers className="size-4" /> },
    { id: "projects", label: "Projects", icon: <House className="size-4" /> },
    { id: "gallery", label: "Gallery", icon: <Images className="size-4" /> },
    { id: "contact", label: "Contact", icon: <Mail className="size-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 backdrop-blur bg-white/70 supports-[backdrop-filter]:bg-white/60 dark:border-slate-800 dark:bg-slate-900/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-500 text-white grid place-content-center font-semibold">S</span>
          <div className="leading-tight">
            <div className="font-semibold">{DATA.name}</div>
            <div className="text-xs text-zinc-500">{DATA.title}</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`}
               className="group px-3 py-2 rounded-lg text-sm hover:bg-white/70 hover:shadow-sm transition flex items-center gap-2">
              <span className="opacity-70 group-hover:opacity-100 transition">{it.icon}</span>
              <span>{it.label}</span>
            </a>
          ))}
        </nav>
        <button
          onClick={() => setDark(d => !d)}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/70 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/70"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
          <span className="hidden sm:inline">{dark ? "Dark" : "Light"}</span>
        </button>
      </div>
      {/* Mobile nav */}
      <div className="md:hidden border-t border-white/70 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-wrap gap-2">
          {items.map((it) => (
            <a key={it.id} href={`#${it.id}`}
               className="px-3 py-2 rounded-lg text-sm hover:bg-white/70 transition flex items-center gap-2">
              {it.icon} {it.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Pastel halo */}
      <motion.div aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}
        className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute top-24 -right-20 h-72 w-72 rounded-full bg-fuchsia-200/60 blur-3xl" />
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-[1.2fr_.8fr] gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">{DATA.name}</span>
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">{DATA.title}</p>
            <p className="mt-6 leading-7 text-zinc-700 dark:text-zinc-300 max-w-2xl">{DATA.summary}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800/60">
                <Mail className="size-4" /> {DATA.email}
              </a>
              <a href={`tel:${DATA.phone}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800/60">
                <Phone className="size-4" /> {DATA.phone}
              </a>
              <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/60 dark:border-slate-700 dark:bg-slate-800/60">
                <MapPin className="size-4" /> {DATA.location}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800/60">
                <Github className="size-4" /> GitHub
              </a>
              <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800/60">
                <Linkedin className="size-4" /> LinkedIn
              </a>
              {DATA.links.resume !== "#" && (
                <a href={DATA.links.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow transition hover:-translate-y-0.5 dark:border-slate-700 dark:bg-slate-800/60">
                  <ExternalLink className="size-4" /> Resume
                </a>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
            className="rounded-2xl border border-zinc-200 p-6 lg:p-8 bg-white/70 backdrop-blur shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
            <h3 className="font-semibold mb-4">At a glance</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><Briefcase className="size-4 mt-0.5" /> 10+ years experience</li>
              <li className="flex gap-3"><ShieldCheck className="size-4 mt-0.5" /> Fintech, SaaS & Web3</li>
              <li className="flex gap-3"><Cloud className="size-4 mt-0.5" /> AWS, Docker, NGINX</li>
              <li className="flex gap-3"><Server className="size-4 mt-0.5" /> Laravel, Node.js, REST APIs</li>
              <li className="flex gap-3"><MonitorSmartphone className="size-4 mt-0.5" /> React, Vue, Angular</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const Skills = () => (
  <Section id="skills" title="Core Technical Skills">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {DATA.skills.map((cat) => (
        <div key={cat.label} className="rounded-2xl border border-zinc-200 p-6 bg-white/70 backdrop-blur shadow-sm hover:-translate-y-1 transition dark:border-slate-700 dark:bg-slate-800/60">
          <div className="flex items-center gap-2 mb-3">{cat.icon}<h3 className="font-semibold">{cat.label}</h3></div>
          <div className="-m-1">{cat.items.map((it) => (<Pill key={it}>{it}</Pill>))}</div>
        </div>
      ))}
    </div>
  </Section>
);

const Experience = () => (
  <Section id="experience" title="Professional Experience">
    <ol className="relative border-l pl-6 border-zinc-200 dark:border-slate-700">
      {DATA.experience.map((job, i) => (
        <li key={i} className="mb-10 ml-2">
          <span className="absolute -left-[9px] mt-1 grid size-4 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
          <div className="flex items-center gap-2 text-sm text-zinc-500 mb-1 dark:text-zinc-400"><Calendar className="size-4" />{job.time}</div>
          <h3 className="text-lg font-semibold">{job.role}</h3>
          <p className="text-zinc-600 dark:text-zinc-300">{job.company}</p>
          {job.bullets && (<ul className="mt-2 list-disc ml-5 space-y-1 text-zinc-700 dark:text-zinc-300">{job.bullets.map((b, idx) => (<li key={idx}>{b}</li>))}</ul>)}
        </li>
      ))}
    </ol>
  </Section>
);

const Projects = () => (
  <Section id="projects" title="Selected Projects (with demo access)">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {DATA.projects.map((p, idx) => (
        <article key={idx} className="rounded-2xl border border-zinc-200 overflow-hidden bg-white/80 backdrop-blur shadow-sm hover:-translate-y-1 transition dark:border-slate-700 dark:bg-slate-800/60">
          <div className="aspect-video bg-gradient-to-br from-sky-100 via-indigo-100 to-fuchsia-100"></div>
          <div className="p-5">
            <h3 className="font-semibold text-base flex items-center gap-2">{p.name}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 min-h-12">{p.description}</p>
            <div className="mt-3 -m-1">{p.tech.map((t) => (<Pill key={t}>{t}</Pill>))}</div>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              {p.liveUrl && (<a href={p.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow dark:border-slate-700 dark:bg-slate-800/60"> <ExternalLink className="size-4" /> Live</a>)}
              {p.repoUrl && (<a href={p.repoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow dark:border-slate-700 dark:bg-slate-800/60"> <LinkIcon className="size-4" /> Code</a>)}
              {p.demo && (<div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/70 text-zinc-700 shadow-sm dark:border-slate-700 dark:bg-slate-800/60 dark:text-zinc-300"><LogIn className="size-4" /><span className="text-xs sm:text-sm"><strong>User:</strong> {p.demo.username} &nbsp;|&nbsp; <strong>Pass:</strong> {p.demo.password}</span></div>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  </Section>
);

const GallerySlider = () => {
  const [index, setIndex] = React.useState(0);
  const total = DATA.gallery.length;
  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  return (
    <Section id="gallery" title="Website Gallery">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white/70 backdrop-blur shadow-md dark:border-slate-700 dark:bg-slate-800/60">
        <motion.div key={index} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}
          className="aspect-video flex items-center justify-center bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <img src={DATA.gallery[index].image} alt={DATA.gallery[index].name} className="w-full h-full object-contain" />
        </motion.div>
        <div className="absolute inset-0 flex justify-between items-center px-3">
          <button onClick={prev} className="p-2 rounded-full bg-white/70 shadow hover:scale-105 transition dark:bg-slate-800/70" aria-label="Previous">
            <ChevronLeft className="size-5" />
          </button>
          <button onClick={next} className="p-2 rounded-full bg-white/70 shadow hover:scale-105 transition dark:bg-slate-800/70" aria-label="Next">
            <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-zinc-700 dark:text-zinc-200 bg-white/70 dark:bg-slate-800/70 px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
          <ImageIcon className="size-4 text-sky-500" /> {DATA.gallery[index].name}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {DATA.gallery.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full transition ${i === index ? "bg-sky-500" : "bg-zinc-300 dark:bg-zinc-600"}`} />
        ))}
      </div>
    </Section>
  );
};

const Contact = () => (
  <Section id="contact" title="Contact">
    <div className="rounded-2xl border border-zinc-200 p-6 bg-white/80 backdrop-blur shadow-sm dark:border-slate-700 dark:bg-slate-800/60">
      <p className="text-zinc-700 dark:text-zinc-300">Open to new roles, contracts, and collaborations in fintech, SaaS, and Web3. Feel free to reach out.</p>
      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
        <a href={`mailto:${DATA.email}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow dark:border-slate-700 dark:bg-slate-800/60"> <Mail className="size-4" /> {DATA.email}</a>
        <a href={`tel:${DATA.phone}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow dark:border-slate-700 dark:bg-slate-800/60"> <Phone className="size-4" /> {DATA.phone}</a>
        <a href={DATA.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow dark:border-slate-700 dark:bg-slate-800/60"> <Github className="size-4" /> GitHub</a>
        <a href={DATA.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 bg-white/80 shadow-sm hover:shadow dark:border-slate-700 dark:bg-slate-800/60"> <Linkedin className="size-4" /> LinkedIn</a>
      </div>
    </div>
  </Section>
);

export default function App() {
  const [dark, setDark] = React.useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-dvh bg-gradient-to-b from-sky-50 via-white to-fuchsia-50 text-zinc-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-zinc-100">
      <Navbar dark={dark} setDark={setDark} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">Last updated: {new Date().toLocaleDateString()}</span>
          <a href="#about" className="text-sm hover:underline">Back to top</a>
        </div>
      </div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <GallerySlider />
      <Contact />
      <footer className="border-t border-white/70 py-10 mt-8 bg-white/40 backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {DATA.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:underline">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
