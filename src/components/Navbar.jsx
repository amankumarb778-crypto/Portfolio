import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
    const navRef = useRef(null);
    const linkRefs = useRef({});

    // Glass effect on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // IntersectionObserver — auto-highlight section in view
    useEffect(() => {
        const observers = [];
        NAV_ITEMS.forEach(item => {
            const id = item.toLowerCase();
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.2, rootMargin: '-60px 0px -40% 0px' }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    // Move the sliding pill
    const updatePill = () => {
        const activeEl = linkRefs.current[activeSection];
        const containerEl = navRef.current;
        if (!activeEl || !containerEl) return;
        const containerRect = containerEl.getBoundingClientRect();
        const activeRect = activeEl.getBoundingClientRect();
        setPillStyle({
            left: activeRect.left - containerRect.left,
            width: activeRect.width,
        });
    };

    useEffect(() => {
        const raf = requestAnimationFrame(updatePill);
        return () => cancelAnimationFrame(raf);
    }, [activeSection]);

    useEffect(() => {
        window.addEventListener('resize', updatePill);
        return () => window.removeEventListener('resize', updatePill);
    }, [activeSection]);

    const handleNavClick = (e, item) => {
        e.preventDefault();
        const id = item.toLowerCase();
        setActiveSection(id);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[1000] px-5 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled
                    ? 'bg-[rgba(15,23,42,0.6)] backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]'
                    : 'bg-transparent border-b border-transparent'
                }`}
        >
            <div className="container flex justify-between items-center" style={{ height: 'var(--nav-height)' }}>

                {/* Logo */}
                <div
                    className="text-[1.1rem] font-extrabold tracking-wide w-[50px] h-[50px] flex items-center justify-center cursor-pointer rounded-[10px] border-2 border-[var(--primary-color)] shrink-0 transition-shadow duration-400"
                    style={{
                        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        boxShadow: '0 0 12px rgba(168,85,247,0.35)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 22px rgba(168,85,247,0.65)'}
                    onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 12px rgba(168,85,247,0.35)'}
                    onClick={() => {
                        setActiveSection('home');
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    AK
                </div>

                {/* Nav pill container */}
                <div
                    ref={navRef}
                    className="desktop-menu relative flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.09] rounded-full py-1.5 px-2 backdrop-blur-lg"
                >
                    {/* Sliding background pill */}
                    <div
                        className="absolute top-1.5 rounded-full pointer-events-none z-0"
                        style={{
                            height: 'calc(100% - 12px)',
                            left: pillStyle.left,
                            width: pillStyle.width,
                            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                            boxShadow: '0 4px 15px rgba(168,85,247,0.45)',
                            transition: 'left 0.45s cubic-bezier(0.4, 0, 0.2, 1), width 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    />

                    {NAV_ITEMS.map(item => {
                        const id = item.toLowerCase();
                        const isActive = activeSection === id;
                        return (
                            <a
                                key={item}
                                href={`#${id}`}
                                ref={el => { if (el) linkRefs.current[id] = el; }}
                                onClick={e => handleNavClick(e, item)}
                                className="relative z-[1] py-[7px] px-4 rounded-full text-[0.78rem] font-bold tracking-[0.08em] uppercase no-underline whitespace-nowrap select-none transition-colors duration-400"
                                style={{ color: isActive ? '#fff' : 'var(--text-secondary)' }}
                                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-secondary)'; }}
                            >
                                {item}
                            </a>
                        );
                    })}
                </div>

                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="bg-white/[0.07] border border-white/[0.12] text-[var(--text-main)] cursor-pointer text-[1.1rem] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 hover:bg-[rgba(168,85,247,0.25)]"
                >
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
