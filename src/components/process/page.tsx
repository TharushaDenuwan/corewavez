import React from 'react'
import { CheckCircle, Lightbulb, Code, TestTube, Rocket, BarChart3, ClipboardList, Users, Zap, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

function Process() {
  const steps = [
    {
      id: 1,
      title: 'Discovery & Planning',
      description: 'We meet with you to understand your business goals, requirements, and challenges. We analyze your market and competition to create a tailored strategy.',
      icon: <Lightbulb size={32} />
    },
    {
      id: 2,
      title: 'Requirement Analysis',
      description: 'Detailed documentation of all technical and business requirements. We create wireframes, mockups, and project specifications.',
      icon: <ClipboardList size={32} />
    },
    {
      id: 3,
      title: 'Design & Architecture',
      description: 'Our design team creates modern, user-friendly interfaces. Tech architects plan scalable and secure system architecture.',
      icon: <Code size={32} />
    },
    {
      id: 4,
      title: 'Development',
      description: 'Expert developers build your solution using latest technologies. Continuous integration and testing ensure quality throughout development.',
      icon: <Code size={32} />
    },
    {
      id: 5,
      title: 'Testing & QA',
      description: 'Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure zero defects.',
      icon: <TestTube size={32} />
    },
    {
      id: 6,
      title: 'Deployment',
      description: 'Smooth deployment to production with minimal downtime. We ensure everything runs perfectly on live servers.',
      icon: <Rocket size={32} />
    },
    {
      id: 7,
      title: 'Monitoring & Support',
      description: 'Round-the-clock monitoring, maintenance, and support to ensure optimal performance and quick issue resolution.',
      icon: <BarChart3 size={32} />
    },
    {
      id: 8,
      title: 'Continuous Improvement',
      description: 'Regular updates, optimizations, and feature enhancements based on user feedback and analytics.',
      icon: <CheckCircle size={32} />
    }
  ]

  const workFeatures = [
    {
      icon: <Users size={28} />,
      title: 'Collaboration',
      description: 'We work closely with you at every step, ensuring your vision is brought to life exactly as you envision it.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks at every stage guarantee a robust, bug-free final product.'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Scalability',
      description: 'Our solutions are built with future growth in mind, ready to scale with your business needs.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        {/* Header */}
        <motion.header 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">Our Workflow</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-primary bg-clip-text text-transparent">
            Our Development Process
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A structured, collaborative approach to delivering exceptional results that exceed expectations
          </p>
        </motion.header>

        {/* Process Timeline */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id} 
              className="flex gap-6 relative"
              variants={itemVariants}
            >
              {/* Step Icon & Connector */}
              <div className="flex flex-col items-center flex-shrink-0">
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-3 border-2 border-primary/20 hover:border-primary/40 transition-all"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(var(--primary), 0.3)" }}
                >
                  {step.icon}
                </motion.div>
                {idx < steps.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-primary/40 to-primary/10" />
                )}
              </div>

              {/* Step Content */}
              <motion.div 
                className="pb-8 flex-grow"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-lg transition-all h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                      Step {step.id}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Our Process Works */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Why Our Process Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/20 hover:border-primary/40"
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Stats */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { number: '8', label: 'Process Phases' },
            { number: '100%', label: 'Transparency' },
            { number: '24/7', label: 'Support' },
            { number: '0', label: 'Hidden Costs' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's begin the journey to transform your business with our proven process
          </p>
          <motion.button 
            className="px-8 py-4 bg-white text-primary rounded-lg font-bold hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
