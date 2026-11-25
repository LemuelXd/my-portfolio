import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, MapPinned, BookOpen } from 'lucide-react';

const projects = [
  {
    number: '01',
    title: 'LostLink AI',
    type: 'Collaborative lost & found platform',
    description: 'A responsive lost-property platform prototype designed to help people report missing and found items, explore possible matches, and reconnect belongings with their owners. The current frontend uses clearly labelled demo data and illustrative match scores.',
    tags: ['React 19', 'TypeScript', 'Vite', 'Framer Motion'],
    live: 'https://ai-lostlink.vercel.app/',
    github: 'https://github.com/LostLinkAi/lostlinkai_frontend',
    icon: MapPinned,
    status: 'Live frontend prototype',
  },
  {
    number: '02',
    title: 'Story Spark Studio',
    type: 'Interactive storytelling platform',
    description: 'A child-friendly story creation experience that lets users shape characters and settings, create story content, and explore narration and sharing features.',
    tags: ['React', 'Interactive UI', 'Creative technology'],
    live: 'https://story-spark-studio-72.vercel.app/',
    github: 'https://github.com/LemuelXd/story-spark-studio-72',
    icon: BookOpen,
    status: 'Live project',
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24 pt-28">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="hero-glow hero-glow-one pointer-events-none" />
      <div className="section-shell relative z-10">
        <motion.header initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14 max-w-3xl">
          <p className="section-kicker mb-4">FEATURED PROJECTS · REAL REPOSITORIES</p>
          <h1 className="section-title">Selected work, <span className="gradient-text">built with purpose.</span></h1>
          <p className="hero-description mt-5 max-w-2xl">A closer look at two projects from my development journey. Explore each live experience or inspect its source code on GitHub.</p>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -5 }}
                className="project-preview-card flex min-h-[430px] flex-col"
              >
                <div className="project-card-top"><span>{project.number} / 02</span><span>{project.status}</span></div>
                <div className="my-9 grid h-20 w-20 place-items-center rounded-2xl border border-cyan-200/15 bg-gradient-to-br from-cyan-300/10 to-indigo-400/10 text-cyan-200 shadow-[0_12px_40px_rgba(56,189,248,.08)]">
                  <Icon size={36} strokeWidth={1.4} />
                </div>
                <p className="project-type">{project.type}</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-100">{project.title}</h2>
                <p className="project-description mt-3">{project.description}</p>
                <div className="project-tags mt-5">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <a href={project.live} target="_blank" rel="noreferrer" className="button-primary">View live project <ArrowUpRight size={16} /></a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="button-secondary">Source code <ArrowRight size={15} /></a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="closing-panel mt-16">
          <p className="section-kicker">MORE IN PROGRESS</p>
          <h2 className="section-title mt-3">Always learning. <span className="gradient-text">Always building.</span></h2>
          <p className="hero-description mt-3 max-w-2xl">These featured projects are a snapshot of my work. Visit GitHub to explore coursework, experiments, and other repositories as they evolve.</p>
          <a href="https://github.com/LemuelXd" target="_blank" rel="noreferrer" className="button-primary mt-6 inline-flex">Explore my GitHub <ArrowUpRight size={17} /></a>
        </div>
      </div>
    </div>
  );
}
