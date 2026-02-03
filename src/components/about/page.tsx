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
      
      role: 'Founder & CEO',
      description: 'Leading CoreWavez with a passion for transforming businesses through innovative technology solutions.',
      image: '/dil.png'
    },
    {
      
      role: 'Tech Lead',
      description: 'Architecting scalable solutions and ensuring technical excellence across all projects.',
      image: '/taru.png'
    },
    {
      
      role: 'Social Media Handler',
      description: 'Managing our online presence and engaging with our community across social platforms.',
      image: '/parami.png'
    },
    {
   
      role: 'Project Manager',
      description: 'Ensuring smooth project execution and exceeding client expectations on time and budget.',
      image: '/mahesh.png'
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
      <div className="container px-6 py-20 mx-auto lg:px-12">
        {/* Hero Section */}
        <motion.header 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10">
            <span className="text-sm font-semibold text-primary">About Us</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-transparent bg-gradient-to-r from-slate-900 to-primary bg-clip-text">
            CoreWavez: Building Digital Futures
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600">
            We're a team of passionate developers, designers, and problem-solvers dedicated to delivering smart, scalable, and secure digital solutions that transform businesses.
          </p>
        </motion.header>

        {/* Our Story */}
        <motion.div 
          className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <h2 className="mb-6 text-4xl font-bold">Our Story</h2>
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-slate-600">
                CoreWavez was founded with a simple mission: to help businesses leverage technology to solve real-world problems and achieve their goals.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                We started as a small team of passionate developers and have grown into a trusted partner for businesses across various industries, delivering countless successful projects from web apps to advanced POS systems.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Today, we continue to grow while maintaining our core values of client-centricity, innovation, and quality. We're not just building software; we're building partnerships.
              </p>
            </div>
          </div>
          <motion.div 
            className="relative flex items-center justify-center p-12 border rounded-2xl h-96 border-primary/10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              src="/team.png" 
              alt="Growing Team" 
              className="absolute inset-0 object-cover w-full h-full rounded-2xl"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* <div className="relative z-10 text-center text-white">
              <h3 className="text-2xl font-bold">Growing Team</h3>
              <p className="mt-2">Passionate professionals dedicated to your success</p>
            </div> */}
          </motion.div>
        </motion.div>

        {/* Our Values */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="mb-12 text-4xl font-bold text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="p-8 transition-all bg-white border rounded-2xl border-slate-200 hover:border-primary hover:shadow-xl"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-xl text-primary">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div 
          className="grid grid-cols-2 gap-6 mb-20 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="p-8 text-center border bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border-primary/10 hover:border-primary/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-center mb-3 text-primary">{stat.icon}</div>
              <div className="mb-2 text-4xl font-bold text-slate-900">{stat.value}</div>
              <p className="font-medium text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Team */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="mb-12 text-4xl font-bold text-center">Our Team</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="p-6 transition-all bg-white border rounded-2xl border-slate-200 hover:shadow-xl"
                whileHover={{ y: -5 }}
              >
                <img src={member.image} alt={member.name} className="object-cover w-16 h-16 mb-4 rounded-full" />
                <h3 className="mb-1 text-lg font-bold">{member.name}</h3>
                <p className="mb-3 text-sm font-semibold text-primary">{member.role}</p>
                <p className="text-sm text-slate-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="p-12 text-center text-white bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="mb-4 text-4xl font-bold">Ready to Work Together?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Let's collaborate to turn your vision into reality with smart, scalable solutions.
          </p>
          <motion.button 
            className="flex items-center justify-center gap-2 px-8 py-4 mx-auto font-bold transition-shadow bg-white rounded-lg text-primary hover:shadow-xl"
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
