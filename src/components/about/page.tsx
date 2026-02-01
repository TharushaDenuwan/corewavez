import React from 'react'
import { Users, Zap, Target, Award, Heart, Globe, ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

function About() {
  const values = [
    {
      icon: <Target size={28} />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We align our goals with yours to deliver solutions that drive real business impact.'
    },
    {
      icon: <Zap size={28} />,
      title: 'Innovation',
      description: 'We stay ahead of technology trends and embrace cutting-edge solutions to keep your business competitive.'
    },
    {
      icon: <Award size={28} />,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: <Heart size={28} />,
      title: 'Integrity',
      description: 'Transparency and honesty guide our relationships with clients. We build trust through reliable delivery.'
    },
    {
      icon: <Users size={28} />,
      title: 'Teamwork',
      description: 'Our diverse team collaborates seamlessly to bring expertise, creativity, and dedication to every project.'
    },
    {
      icon: <Globe size={28} />,
      title: 'Growth',
      description: 'We invest in continuous learning and development to ensure we deliver the best solutions to our clients.'
    }
  ]

  const team = [
    {
      name: 'Founder & CEO',
      role: 'Digital Visionary',
      description: 'Leading CoreWavez with a passion for transforming businesses through innovative technology solutions.'
    },
    {
      name: 'Tech Lead',
      role: 'Full-Stack Developer',
      description: 'Architecting scalable solutions and ensuring technical excellence across all projects.'
    },
    {
      name: 'Design Lead',
      role: 'UI/UX Specialist',
      description: 'Creating beautiful, intuitive interfaces that users love and businesses trust.'
    },
    {
      name: 'Project Manager',
      role: 'Delivery Expert',
      description: 'Ensuring smooth project execution and exceeding client expectations on time and budget.'
    }
  ]

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: <CheckCircle size={24} /> },
    { value: '100%', label: 'Client Satisfaction', icon: <Heart size={24} /> },
    { value: '5+', label: 'Years Experience', icon: <Award size={24} /> },
    { value: '25+', label: 'Happy Clients', icon: <Users size={24} /> }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        {/* Hero Section */}
        <motion.header 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">About Us</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-primary bg-clip-text text-transparent">
            CoreWavez: Building Digital Futures
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're a team of passionate developers, designers, and problem-solvers dedicated to delivering smart, scalable, and secure digital solutions that transform businesses.
          </p>
        </motion.header>

        {/* Our Story */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4">
              <p className="text-slate-600 text-lg leading-relaxed">
                CoreWavez was founded with a simple mission: to help businesses leverage technology to solve real-world problems and achieve their goals.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We started as a small team of passionate developers and have grown into a trusted partner for businesses across various industries, delivering countless successful projects from web apps to advanced POS systems.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Today, we continue to grow while maintaining our core values of client-centricity, innovation, and quality. We're not just building software; we're building partnerships.
              </p>
            </div>
          </div>
          <motion.div 
            className="bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-2xl p-12 h-96 flex items-center justify-center border border-primary/10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center">
              <motion.div 
                className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Users size={40} className="text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900">Growing Team</h3>
              <p className="text-slate-600 mt-2">Passionate professionals dedicated to your success</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl text-center border border-primary/10 hover:border-primary/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mb-4 flex items-center justify-center">
                  <Users size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's collaborate to turn your vision into reality with smart, scalable solutions.
          </p>
          <motion.button 
            className="px-8 py-4 bg-white text-primary rounded-lg font-bold flex items-center justify-center gap-2 mx-auto hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
