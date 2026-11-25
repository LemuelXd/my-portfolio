import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Github,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const roles = [
  'Frontend Developer',
  'React & TypeScript Builder',
  'Software Engineering Student',
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const projects = [
  {
    number: '01',
    title: 'Story Spark Studio',
    type: 'Creative storytelling platform',
    description: 'A child-friendly story creation experience with customizable characters, narration, and shareable stories.',
    href: 'https://story-spark-studio-72.vercel.app/',
    tags: ['React', 'Interactive UI', 'Creative tools'],
  },
  {
    number: '02',
    title: 'Weather Experience',
    type: 'Weather application',
    description: 'A weather-focused interface built to make forecasts and useful conditions easier to explore.',
    href: '/weather',
    tags: ['API integration', 'React', 'Data UI'],
  },
  {
    number: '03',
    title: 'Portfolio & Experiments',
    type: 'Ongoing development',
    description: 'A growing collection of interface experiments, dashboards, and practical software projects.',
    href: 'https://github.com/LemuelXd',
    tags: ['TypeScript', 'UI engineering', 'Learning'],
  },
];

export default function Home() {
  const { displayText } = useTypingEffect({
    texts: roles,
    typingSpeed: 75,
    deletingSpeed: 38,
    pauseDuration: 2200,
  });

  return (
    <div className="home-page relative overflow-hidden">
      <div className="hero-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div className="hero-glow hero-glow-one pointer-events-none" aria-hidden="true" />
      <div className="hero-glow hero-glow-two pointer-events-none" aria-hidden="true" />

      <section className="hero-section relative z-10 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="section-shell w-full grid lg:grid-cols-[1.08fr_.92fr] gap-12 lg:gap-8 items-center py-24 md:py-28">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } }}>
            <motion.div variants={reveal} className="eyebrow-pill mb-7">
              <span className="status-dot" />
              <span>Building thoughtful digital experiences</span>
            </motion.div>

            <motion.p variants={reveal} className="section-kicker mb-4">
              SOFTWARE ENGINEERING · KENYA
            </motion.p>

            <motion.h1 variants={reveal} className="hero-title">
              I’m Lemuel.
              <span className="block hero-title-accent">I build for the web.</span>
            </motion.h1>

            <motion.div variants={reveal} className="role-line mt-6" aria-live="polite">
              <span className="role-prefix">Currently exploring</span>
              <span className="role-text typing-cursor">{displayText}</span>
            </motion.div>

            <motion.p variants={reveal} className="hero-description mt-6 max-w-2xl">
              I’m a Software Engineering student who enjoys turning ideas into useful, responsive, and engaging web experiences. I work with modern frontend tools while growing my understanding of the wider software development process.
            </motion.p>

            <motion.div variants={reveal} className="flex flex-col sm:flex-row gap-3 mt-9">
              <Link to="/projects" className="button-primary">
                Explore projects <ArrowUpRight size={18} />
              </Link>
              <Link to="/contact" className="button-secondary">
                <Mail size={17} /> Let’s connect
              </Link>
            </motion.div>

            <motion.div variants={reveal} className="hero-meta mt-10 flex flex-wrap gap-x-6 gap-y-3">
              <span><MapPin size={15} /> Kenya</span>
              <a href="https://github.com/LemuelXd" target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ArrowUpRight size={13} /></a>
              <a href="mailto:njorogelem@gmail.com"><Mail size={15} /> Email <ArrowUpRight size={13} /></a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -12 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hero-visual relative mx-auto w-full max-w-[540px]"
            aria-label="Decorative three-dimensional developer workspace illustration"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="hero-core">
              <div className="core-ring core-ring-back" />
              <div className="core-ring core-ring-front" />
              <div className="core-globe"><Code2 size={72} strokeWidth={1.2} /></div>
              <span className="core-spark core-spark-a"><Sparkles size={19} /></span>
              <span className="core-spark core-spark-b"><Braces size={21} /></span>
              <span className="core-spark core-spark-c"><Layers3 size={20} /></span>
            </div>
            <div className="floating-code-card code-card-top">
              <div className="code-card-heading"><span className="window-dots"><i /><i /><i /></span><span>hello-world.tsx</span></div>
              <pre><code><span className="code-purple">const</span> <span className="code-blue">build</span> = () <span className="code-purple">=&gt;</span> {'{'}{ '\n' }  <span className="code-green">createSomethingUseful</span>();{ '\n' }{'}'}</code></pre>
            </div>
            <div className="floating-code-card code-card-bottom">
              <span className="mini-icon"><Terminal size={15} /></span>
              <span><strong>Curiosity</strong><small>always in progress</small></span>
              <span className="live-pulse" />
            </div>
            <div className="visual-caption">DESIGN · BUILD · LEARN · REPEAT</div>
          </motion.div>
        </div>
        <a href="#selected-work" className="scroll-cue" aria-label="Scroll to selected work">
          <span>SCROLL TO EXPLORE</span><ArrowDown size={15} />
        </a>
      </section>

      <section id="selected-work" className="section-shell relative z-10 py-24">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">A FEW THINGS I’VE BEEN BUILDING</p>
            <h2 className="section-title">Selected <span className="gradient-text">work.</span></h2>
          </div>
          <Link to="/projects" className="text-link">View all projects <ArrowUpRight size={16} /></Link>
        </div>
        <div className="project-preview-grid mt-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="project-preview-card"
            >
              <div className="project-card-top"><span>{project.number} / 03</span><ArrowUpRight size={18} /></div>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined} className="project-open">
                Explore <ArrowRight size={15} />
              </a>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell relative z-10 pb-24">
        <div className="closing-panel">
          <div className="closing-orb" aria-hidden="true" />
          <div className="relative z-10">
            <p className="section-kicker">HAVE AN IDEA OR OPPORTUNITY?</p>
            <h2 className="section-title">Let’s make something <span className="gradient-text">meaningful.</span></h2>
            <p className="hero-description mt-4 max-w-2xl">I’m open to connecting with developers, learning from new projects, and exploring suitable internship opportunities.</p>
            <Link to="/contact" className="button-primary mt-7 inline-flex">Get in touch <ArrowUpRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
