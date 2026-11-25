import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiNodedotjs,
  SiPython,
  SiNextdotjs,
  SiPostgresql,
} from 'react-icons/si';
import { Database, Layout, Smartphone, Sparkles } from 'lucide-react';

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

const coreTechnologies: Technology[] = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
];

const tools: Technology[] = [
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'GitHub', icon: SiGithub, color: '#E2E8F0' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
];

const exploring: Technology[] = [
  { name: 'Node.js', icon: SiNodedotjs, color: '#80C783' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#E2E8F0' },
  { name: 'Python', icon: SiPython, color: '#8DB6E2' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#7DB7D8' },
];

function TechCard({ item, index }: { item: Technology; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 transition-colors hover:border-cyan-200/20 hover:bg-cyan-200/[0.035]"
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/[0.045]">
        <Icon size={22} style={{ color: item.color }} />
      </span>
      <span className="text-sm font-semibold text-slate-200">{item.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-24 pt-28">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="hero-glow hero-glow-two pointer-events-none" />
      <div className="section-shell relative z-10">
        <motion.header initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-14 max-w-3xl">
          <p className="section-kicker mb-4">TOOLS, TECHNOLOGIES & PRACTICE</p>
          <h1 className="section-title">What I use to <span className="gradient-text">build.</span></h1>
          <p className="hero-description mt-5 max-w-2xl">A practical snapshot of the technologies I work with, the tools in my workflow, and the areas I’m actively learning. I prefer showing my current focus over assigning arbitrary proficiency percentages.</p>
        </motion.header>

        <section className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.06] text-cyan-200"><Layout size={19} /></span>
            <div><h2 className="text-xl font-semibold text-slate-100">Core web technologies</h2><p className="mt-1 text-xs text-slate-500">The main tools I practise and build with</p></div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{coreTechnologies.map((item, index) => <TechCard key={item.name} item={item} index={index} />)}</div>
        </section>

        <div className="grid gap-10 lg:grid-cols-2">
          <section>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-200/15 bg-indigo-200/[0.06] text-indigo-200"><Smartphone size={19} /></span>
              <div><h2 className="text-xl font-semibold text-slate-100">Design & workflow tools</h2><p className="mt-1 text-xs text-slate-500">Supporting my development process</p></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">{tools.map((item, index) => <TechCard key={item.name} item={item} index={index} />)}</div>
          </section>
          <section>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-violet-200/15 bg-violet-200/[0.06] text-violet-200"><Sparkles size={19} /></span>
              <div><h2 className="text-xl font-semibold text-slate-100">Currently exploring</h2><p className="mt-1 text-xs text-slate-500">Areas I’m expanding my knowledge in</p></div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">{exploring.map((item, index) => <TechCard key={item.name} item={item} index={index} />)}</div>
          </section>
        </div>

        <section className="closing-panel mt-14">
          <div className="relative z-10">
            <p className="section-kicker">BEYOND THE FRAMEWORKS</p>
            <h2 className="section-title mt-3">The fundamentals <span className="gradient-text">matter.</span></h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/[0.08] bg-black/10 p-4"><Database className="mb-3 text-cyan-200" size={21} /><h3 className="font-semibold text-slate-100">Database concepts</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">Building understanding of data organisation and database management.</p></div>
              <div className="rounded-xl border border-white/[0.08] bg-black/10 p-4"><Layout className="mb-3 text-cyan-200" size={21} /><h3 className="font-semibold text-slate-100">UI/UX principles</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">Applying usability, layout, and interaction principles to interfaces.</p></div>
              <div className="rounded-xl border border-white/[0.08] bg-black/10 p-4"><Smartphone className="mb-3 text-cyan-200" size={21} /><h3 className="font-semibold text-slate-100">Responsive design</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">Creating layouts that adapt across screen sizes and devices.</p></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
