import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const smoothTo = (hash) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExperienceClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => smoothTo('#experience'), 120);
    } else {
      smoothTo('#experience');
    }
  };

  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Education', path: '/education' },
    { label: 'Certificates', path: '/certifications' },
    { label: 'Experience', path: '/#experience', isHash: true },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 px-4 backdrop-blur-xl text-slate-100 shadow-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
        <NavLink to="/" className="text-base font-bold tracking-tight text-orange-400 sm:text-lg">
          Muskan Kumari
        </NavLink>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {links.map((item) =>
            item.isHash ? (
              <a
                key={item.label}
                href="#experience"
                onClick={handleExperienceClick}
                className="rounded-lg px-2 py-1 text-slate-200 transition-all duration-200 hover:text-orange-400 hover:bg-slate-800/70"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `rounded-lg px-2 py-1 transition-all duration-200 ${
                    isActive
                      ? 'text-orange-400 underline decoration-orange-500/40 underline-offset-4'
                      : 'text-slate-200 hover:text-orange-400 hover:bg-slate-800/70'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800/70 md:hidden"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isMenuOpen ? (
        <nav className="mx-auto mb-3 flex max-w-6xl flex-col gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-2 md:hidden">
          {links.map((item) =>
            item.isHash ? (
              <a
                key={item.label}
                href="#experience"
                onClick={handleExperienceClick}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800/80 hover:text-orange-400"
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'bg-slate-800/80 text-orange-400'
                      : 'text-slate-200 hover:bg-slate-800/80 hover:text-orange-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>
      ) : null
      }

    </header>
  );
}