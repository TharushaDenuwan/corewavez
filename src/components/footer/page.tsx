import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-24 bg-white border-t border-slate-100">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 gap-16 mb-20 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-8 cursor-pointer group">
                            <img src="/logo.png" alt="CoreWavez" className="object-contain w-8 h-8" />
                            <span className="text-2xl font-black font-heading text-slate-900">CoreWaves</span>
                        </div>
                        <p className="mb-10 font-medium leading-relaxed text-slate-500">
                            Leading the next generation of software development. We build solutions that scale with your business and inspire your users.
                        </p>
                        <div className="flex gap-5">
                            <a href="#" className="flex items-center justify-center w-12 h-12 transition-all shadow-sm rounded-2xl bg-slate-50 text-slate-400 hover:bg-primary hover:text-white">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="flex items-center justify-center w-12 h-12 transition-all shadow-sm rounded-2xl bg-slate-50 text-slate-400 hover:bg-primary hover:text-white">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="flex items-center justify-center w-12 h-12 transition-all shadow-sm rounded-2xl bg-slate-50 text-slate-400 hover:bg-primary hover:text-white">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-8 text-lg font-bold text-slate-900">Expertise</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="font-medium transition-colors hover:text-primary">Web Development</a></li>
                            <li><a href="#" className="font-medium transition-colors hover:text-primary">Mobile Solutions</a></li>
                            <li><a href="#" className="font-medium transition-colors hover:text-primary">UI/UX Design</a></li>
                            <li><a href="#" className="font-medium transition-colors hover:text-primary">Cloud Architecture</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-8 text-lg font-bold text-slate-900">Company</h4>
                        <ul className="space-y-4 text-slate-500">
                            <li><a href="#" className="font-medium transition-colors hover:text-primary">About Us</a></li>
                            <li><a href="#" className="font-medium transition-colors hover:text-primary">Our Process</a></li>
                            <li><a href="#" className="font-medium transition-colors hover:text-primary">Careers</a></li>
                            <li><a href="#" className="font-medium transition-colors hover:text-primary">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-8 text-lg font-bold text-slate-900">Stay Productive</h4>
                        <p className="mb-8 font-medium text-slate-500">Subscribe to our engineering blog for the latest tech insights.</p>
                        <div className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-6 py-4 transition-all border bg-slate-50 border-slate-100 rounded-2xl text-slate-900 focus:outline-none focus:border-primary focus:bg-white"
                            />
                            <button className="absolute right-2 top-2 p-2.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all">
                                <Mail size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-6 pt-10 border-t border-slate-100 md:flex-row">
                    <p className="font-medium text-slate-500">© {new Date().getFullYear()} CoreWaves. All rights reserved.</p>
                    <div className="flex gap-10">
                        <a href="#" className="font-medium transition-colors text-slate-400 hover:text-primary">Privacy Policy</a>
                        <a href="#" className="font-medium transition-colors text-slate-400 hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
