import { motion } from 'framer-motion';

const Expertise = () => {
    const expertiseItems = [
        {
            title: "Product & Software Engineering",
            stack: [
                "/react2.png",
                "/anjular2.png",
                "/js2.png",
                "/java2.png"
            ],
            description: "Full-lifecycle development from concept to deployment using modern frameworks and robust backend technologies."
        },
        {
            title: "AI, Data & Analytics",
            stack: ["/chatgpt.png", "/cursor.png", "/grok.png", "claude.png"], // User to provide later
            description: "Turning complex data into actionable business intelligence with advanced machine learning and data processing."
        },
        {
            title: "Cloud, DevOps & DataOps",
            stack: ["/google.png", "/aws.png"], // User to provide later
            description: "Scalable, secure, and automated infrastructure solutions to ensure continuous delivery and rock-solid availability."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-poppins font-semibold text-black mb-4"
                    >
                        End-to-End Engineering Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-primary font-poppins font-medium"
                    >
                        Built Around Your Needs
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expertiseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 bg-slate-50 border border-slate-100 rounded-[32px] flex flex-col items-center text-center hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
                        >
                            <div className="mb-8 flex items-center justify-center gap-4 flex-wrap min-h-[80px]">
                                {item.stack.length > 0 ? (
                                    item.stack.map((img, i) => (
                                        <div key={i} className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                                            <img src={img} alt="stack icon" className="w-8 h-8 object-contain" />
                                        </div>
                                    ))
                                ) : (
                                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 italic text-[10px] text-slate-300">
                                        Stack Icons
                                    </div>
                                )}
                            </div>
                            <h3 className="text-2xl font-poppins font-semibold text-black mb-4 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 font-poppins font-light">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;
