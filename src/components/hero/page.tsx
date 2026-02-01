import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60" // Added slight opacity to ensure text pop
                >
                    <source src="/bg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/40 z-[1]"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-6 flex justify-center">
                            <span className="px-4 py-1.5 bg-white/10 border border-white/20 text-white rounded-full text-sm font-poppins font-medium tracking-wide backdrop-blur-md">
                                Agile Startup Team
                            </span>
                        </div>

                        <h1 className="font-poppins font-light leading-tight mb-8">
                            <span className="block text-4xl md:text-5xl text-white/90 mb-2">Elevate Your Vision</span>
                            <span className="block text-5xl md:text-7xl text-white font-normal mb-2">Powered By</span>
                            <span className="block text-5xl md:text-7xl text-secondary font-semibold">Agile Startup Experts</span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl text-white/70 font-poppins font-light max-w-2xl leading-relaxed mb-12 mx-auto"
                        >
                            Partner with a lean, driven team of Sri Lankan tech talent to build, scale, and innovate at startup speed.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-6 justify-center"
                        >
                            <button className="px-10 py-4 bg-primary text-white rounded-lg font-poppins font-light text-lg hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
                                Let's Build Together
                            </button>
                            <button className="px-10 py-4 border border-white/30 text-white rounded-lg font-poppins font-light text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                                Our Services
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
