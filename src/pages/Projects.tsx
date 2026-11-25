import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BookOpen, CloudSun, Dumbbell, ChartNoAxesCombined, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  stack: string[];
  href: string;
  external?: boolean;
  status: string;
}

const projects: Project[] = [
  {
    id: 'story-spark',
    title: 'Story Spark Studio',
    category: 'Creative web application',
    description: 'A child-friendly story creation experience where users can shape characters and settings, create story content, and explore narration and sharing ideas.',
    icon: BookOpen,
    stack: ['React', 'Local Storage', 'Interactive UI'],
    href: 'https://story-spark-studio-72.vercel.app/',
    external: true,
    status: 'Live project',
  },
  {
    id: 'weather',
    title: 'Weather Experience',
    category: 'Web application',
    description: 'A weather application interface with forecast-focused information and supporting data views.',
    icon: CloudSun,
    stack: ['React', 'API integration', 'Responsive UI'],
    href: '/weather',
    status: 'Portfolio demo',
  },
  {
    id: 'fitness',
    title: 'Fitness Tracker',
    category: 'Interactive dashboard',
    description: 'An interface concept for tracking workouts and viewing personal fitness activity through visual summaries.',
    icon: Dumbbell,
    stack: ['React', 'TypeScript', 'Charts'],
    href: '/fitness',
    status: 'Portfolio demo',
  },
  {
    id: 'analytics',
    title: 'Analytics Dashboard',
    category: 'Data visualization',
    description: 'A dashboard experience focused on presenting metrics and visual summaries in a clear, responsive layout.',
    icon: ChartNoAxesCombined,
    stack: ['React', 'TypeScript', 'Recharts'],
    href: '/dashboard',
    status: 'Portfolio demo',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const content = (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="project-preview-card group h-full"
    >
      <div className="project-card-top">
        <span>{String(index + 1).padStart(2, '0')} / 04</span>
        <span className="flex items-center gap-2">{project.status}<ArrowUpRight size={15} /></span>
      </div>
      <div className="my-9 grid h-16 w-16 place-items-center rounded-2xl border border-cyan-200/15 bg-gradient-to-br from-cyan-300/10 to-indigo-400/10 text-cyan-200 shadow-[0_12px_40px_rgba(56,189,248,.08)] transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
        <Icon size={30} strokeWidth={1.5} />
      </div>
      <p className="project-type">{project.category}</p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-100">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <span className="project-open">{project.external ? 'Open live project' : 'Explore project'} <ArrowRight size={15} /></span>
    </motion.article>
  );

  return project.external ? (
    <a href={project.href} target="_blank" rel="noreferrer" className="block h-full" aria-label={`Open ${project.title} in a new tab`}>{content}</a>
  ) : (
    <Link to={project.href} className="block h-full" aria-label={`Explore ${project.title}`}>{content}</Link>
  );
}

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-20 pt-28">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="hero-glow hero-glow-one pointer-events-none" />
      <div className="section-shell relative z-10">
        <motion.header initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14 max-w-3xl">
          <p className="section-kicker mb-4">SELECTED WORK & EXPERIMENTS</p>
          <h1 className="section-title">Projects built with <span className="gradient-text">curiosity.</span></h1>
          <p className="hero-description mt-5 max-w-2xl">A selection of applications and interface explorations. Some are live projects; others are interactive demos within this portfolio.</p>
        </motion.header>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        <div className="closing-panel mt-16">
          <p className="section-kicker">MORE EXPERIMENTS</p>
          <h2 className="section-title mt-3">The code keeps <span className="gradient-text">evolving.</span></h2>
          <p className="hero-description mt-3 max-w-xl">Explore the repositories and ongoing work on GitHub.</p>
          <a href="https://github.com/LemuelXd" target="_blank" rel="noreferrer" className="button-primary mt-6 inline-flex">Visit my GitHub <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </div>
  );
}
