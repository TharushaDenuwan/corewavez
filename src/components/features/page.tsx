import { Layers, Users, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const features = [
        {
            title: "Agile Software Development",
            description: "We don't just write code; we build products. From rapid prototyping to full-scale deployment, our startup team delivers high-quality software using the latest tech stacks to help you hit the market faster.",
            icon: Zap,
            tag: "Startup Speed"
        },
        {
            title: "Dedicated Founding Talent",
            description: "Gain access to a passionate core of Sri Lankan developers, designers, and strategists. We work as an extension of your team, bringing a founder's mindset to every line of code and every design decision.",
            icon: Users,
            tag: "Startup Partnership"
        },
        {
            title: "Secure & Modern Architecture",
            description: "Build on a solid foundation. We implement modern security best practices and scalable cloud architectures to ensure your startup’s data and systems are protected from day one.",
            icon: ShieldCheck,
            tag: "Modern Security"
        },
        {
            title: "End-to-End Product Design",
            description: "From initial concept and wireframes to a polished user interface. We specialize in creating intuitive, beautiful experiences that solve real problems and delight your early adopters.",
            icon: Layers,
            tag: "Product Focus"
        }
    ];

    return (
        <section id="services" className="py-24 bg-[#fdfdfd]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-poppins font-semibold text-black mb-6"
                    >
                        Why startups like yours <span className="text-primary">Grow With Us</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-500 font-poppins font-light max-w-3xl mx-auto"
                    >
                        A hungry, agile team dedicated to turning your ambitious ideas into reality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 bg-white border border-slate-100 rounded-2xl hover:bg-primary transition-all duration-300 shadow-sm hover:shadow-2xl"
                            >
                                <div className="flex flex-col gap-6">
                                    <div className="w-16 h-16 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                        <Icon size={32} className="text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-poppins font-bold text-primary uppercase tracking-widest mb-3 block group-hover:text-white/80 transition-colors">
                                            {feature.tag}
                                        </span>
                                        <h3 className="text-2xl font-poppins font-semibold text-black mb-4 group-hover:text-white transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate-600 font-poppins font-light leading-relaxed text-lg group-hover:text-white/90 transition-colors">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
