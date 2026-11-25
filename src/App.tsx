import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
const ParticleBackground = lazy(() => import('@/components/3d/ParticleBackground'));

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Skills = lazy(() => import('@/pages/Skills'));
const Projects = lazy(() => import('@/pages/Projects'));
const WeatherApp = lazy(() => import('@/pages/WeatherApp'));
const FitnessTracker = lazy(() => import('@/pages/FitnessTracker'));
const AnalyticsDashboard = lazy(() => import('@/pages/AnalyticsDashboard'));
const Contact = lazy(() => import('@/pages/Contact'));

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center" role="status" aria-label="Loading page">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-10 h-10 border-2 border-cyan-300/20 border-t-cyan-300 rounded-full"
      />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Suspense fallback={<PageLoader />}><Home /></Suspense></PageTransition>} />
        <Route path="/about" element={<PageTransition><Suspense fallback={<PageLoader />}><About /></Suspense></PageTransition>} />
        <Route path="/skills" element={<PageTransition><Suspense fallback={<PageLoader />}><Skills /></Suspense></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Suspense fallback={<PageLoader />}><Projects /></Suspense></PageTransition>} />
        <Route path="/weather" element={<PageTransition><Suspense fallback={<PageLoader />}><WeatherApp /></Suspense></PageTransition>} />
        <Route path="/fitness" element={<PageTransition><Suspense fallback={<PageLoader />}><FitnessTracker /></Suspense></PageTransition>} />
        <Route path="/dashboard" element={<PageTransition><Suspense fallback={<PageLoader />}><AnalyticsDashboard /></Suspense></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Suspense fallback={<PageLoader />}><Contact /></Suspense></PageTransition>} />
        <Route path="*" element={<PageTransition><div className="min-h-[65vh] flex flex-col items-center justify-center px-6 text-center"><p className="section-kicker">404 · PAGE NOT FOUND</p><h1 className="section-title mt-4">This route doesn’t exist.</h1><a className="button-primary mt-7" href="/">Back home <ArrowUpRight size={17} /></a></div></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
        <Navigation />
        <main className="relative z-10"><AnimatedRoutes /></main>
        <footer className="relative z-10 mt-4 border-t border-white/[0.07] bg-[#070b14]/60">
          <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4 py-7">
            <div className="text-center sm:text-left">
              <p className="text-sm font-semibold text-slate-300">Lemuel Njoroge</p>
              <p className="mt-1 text-xs text-slate-500">Learning, building, and improving one project at a time.</p>
            </div>
            <div className="flex items-center gap-5 text-xs text-slate-400">
              <a href="https://github.com/LemuelXd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-200">GitHub <ArrowUpRight size={13} /></a>
              <a href="mailto:njorogelem@gmail.com" className="inline-flex items-center gap-1.5 transition-colors hover:text-cyan-200">Email <ArrowUpRight size={13} /></a>
            </div>
            <p className="text-[11px] text-slate-600">© {new Date().getFullYear()} · Built with curiosity.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
