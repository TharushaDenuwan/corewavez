import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Process', href: '/process' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-slate-200 ${scrolled ? 'py-1.5 shadow-sm' : 'py-3'
                }`}
        >
            <div className="container flex items-center justify-between px-6 mx-auto lg:px-12">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-1 cursor-pointer group">
                
                    <img src="/logo.png" alt="CoreWaves Logo" className="object-contain w-8 h-8" />
                    <span className="text-2xl font-light tracking-tight font-poppins text-primary">
                        CoreWaves
                    </span>
                    <img src="/logo1.png" alt="CoreWaves Logo" className="object-contain w-20 h-10" />
                </Link>

                {/* Center Navigation Links */}
                <div className="items-center hidden gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex items-center gap-1.5 cursor-pointer group">
                            {link.href.startsWith('/') ? (
                                <Link to={link.href} className="flex items-center gap-1.5">
                                    <span className="text-[17px] font-poppins font-light text-black hover:text-primary transition-colors">
                                        {link.name}
                                    </span>
                                    <ChevronDown size={16} className="text-black/70 group-hover:text-primary transition-colors mt-0.5" />
                                </Link>
                            ) : (
                                <a href={link.href} className="flex items-center gap-1.5">
                                    <span className="text-[17px] font-poppins font-light text-black hover:text-primary transition-colors">
                                        {link.name}
                                    </span>
                                    <ChevronDown size={16} className="text-black/70 group-hover:text-primary transition-colors mt-0.5" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                {/* Action Button */}
                <div className="hidden lg:block">
                    <button 
                        onClick={() => {
                            const element = document.getElementById('contact');
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className="px-7 py-2.5 bg-primary text-white rounded-lg font-poppins font-light text-base hover:bg-primary-hover transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
                    >
                        Contact Us
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="p-2 lg:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute left-0 w-full p-6 bg-white border-b shadow-xl top-full border-slate-200 lg:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex items-center justify-between py-2 border-b border-slate-50">
                                    {link.href.startsWith('/') ? (
                                        <Link to={link.href} className="flex items-center justify-between w-full">
                                            <span className="text-xl font-light text-black transition-colors font-poppins hover:text-primary">
                                                {link.name}
                                            </span>
                                            <ChevronDown size={20} className="text-black/40" />
                                        </Link>
                                    ) : (
                                        <a href={link.href} className="flex items-center justify-between w-full">
                                            <span className="text-xl font-light text-black transition-colors font-poppins hover:text-primary">
                                                {link.name}
                                            </span>
                                            <ChevronDown size={20} className="text-black/40" />
                                        </a>
                                    )}
                                </div>
                            ))}
                            <button 
                                onClick={() => {
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="w-full py-4 text-lg font-light text-white transition-all shadow-lg bg-primary rounded-2xl font-poppins hover:bg-primary-hover shadow-primary/20"
                            >
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
