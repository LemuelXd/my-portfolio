import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code2, Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-white/[0.08] bg-[#070b14]/85 shadow-lg shadow-black/10 backdrop-blur-2xl' : 'bg-transparent'}`}
      >
        <nav className="section-shell flex h-[76px] items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="group inline-flex items-center gap-3" aria-label="Lemuel home">
            <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/20 to-indigo-400/20 text-cyan-100 shadow-[0_12px_30px_rgba(34,211,238,0.12)]">
              <Code2 size={20} />
            </span>
            <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tight text-slate-100">lemuel<span className="text-cyan-300">.</span></span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} aria-current={active ? 'page' : undefined} className={`relative rounded-xl px-4 py-2.5 text-[.78rem] font-semibold transition-colors duration-200 ${active ? 'text-cyan-100' : 'text-slate-400 hover:text-slate-100'}`}>
                  {active && <motion.span layoutId="nav-active" className="absolute inset-0 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07]" transition={{ type: 'spring', stiffness: 360, damping: 30 }} />}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a href="https://github.com/LemuelXd" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all hover:border-cyan-300/25 hover:bg-cyan-300/[0.07] hover:text-cyan-100">
              GitHub <ArrowUpRight size={14} />
            </a>
          </div>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-100 transition-colors hover:bg-white/[0.08] md:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[84px] z-40 rounded-2xl border border-white/10 bg-[#0a1220]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${active ? 'bg-cyan-300/[0.10] text-cyan-100' : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a href="https://github.com/LemuelXd" target="_blank" rel="noreferrer" className="mt-1 flex items-center justify-between rounded-xl border-t border-white/[0.08] px-4 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-100">
                GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isMobileMenuOpen && <button type="button" aria-label="Close navigation menu" className="fixed inset-0 z-30 cursor-default bg-black/30 md:hidden" onClick={() => setIsMobileMenuOpen(false)} />}
    </>
  );
}
