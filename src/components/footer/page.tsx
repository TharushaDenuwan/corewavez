import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white py-24 border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-8 group cursor-pointer">
                            <img src="/logo.png" alt="CoreWavez" className="w-8 h-8 object-contain" />
                            <span className="text-2xl font-heading font-black text-slate-900">CoreWaves</span>
                        </div>
                        <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                            Leading the next generation of software development. We build solutions that scale with your business and inspire your users.
                        </p>
                        <div className="flex gap-5">
                            <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all shadow-sm">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-8">Expertise</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-primary transition-colors font-medium">Web Development</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors font-medium">Mobile Solutions</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors font-medium">UI/UX Design</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors font-medium">Cloud Architecture</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-8">Company</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="hover:text-primary transition-colors font-medium">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors font-medium">Our Process</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors font-medium">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors font-medium">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-8">Stay Productive</h4>
                        <p className="text-slate-500 mb-8 font-medium">Subscribe to our engineering blog for the latest tech insights.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all"
                            />
                            <button className="absolute right-2 top-2 p-2.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all">
                                <Mail size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 font-medium">© {new Date().getFullYear()} CoreWaves. All rights reserved.</p>
                    <div className="flex gap-10">
                        <a href="#" className="text-slate-400 hover:text-primary font-medium transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-primary font-medium transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
