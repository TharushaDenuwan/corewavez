import React from 'react'
import { Users, Zap, Target, Award, Heart, Globe } from 'lucide-react'

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

  return (
    <section className="container mx-auto px-6 lg:px-12 py-16">
      {/* Hero Section */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-semibold mb-4">About CoreWavez</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We're a team of passionate developers, designers, and problem-solvers dedicated to delivering smart, scalable, and secure digital solutions that transform businesses.
        </p>
      </header>

      {/* Our Story */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-slate-600 mb-4">
            CoreWavez was founded with a simple mission: to help businesses leverage technology to solve real-world problems and achieve their goals. We started as a small team of passionate developers and have grown into a trusted partner for businesses across various industries.
          </p>
          <p className="text-slate-600 mb-4">
            Over the years, we've successfully delivered countless projects—from custom web applications and e-commerce platforms to advanced POS systems and business automation solutions. Each project has taught us something valuable and shaped our approach to delivering excellence.
          </p>
          <p className="text-slate-600">
            Today, we continue to grow while maintaining our core values of client-centricity, innovation, and quality. We're not just building software; we're building partnerships and helping businesses thrive in the digital age.
          </p>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 h-96 flex items-center justify-center">
          <div className="text-center">
            <Users size={64} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-slate-700">Growing Team</h3>
            <p className="text-slate-600 mt-2">Passionate professionals dedicated to your success</p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-slate-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-lg border border-primary/10">
              <div className="w-16 h-16 bg-primary/20 rounded-full mb-4 flex items-center justify-center">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-slate-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">50+</div>
          <p className="text-slate-600">Projects Delivered</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">100%</div>
          <p className="text-slate-600">Client Satisfaction</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">5+</div>
          <p className="text-slate-600">Years Experience</p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-primary mb-2">25+</div>
          <p className="text-slate-600">Happy Clients</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-6 opacity-90">Let's collaborate to turn your vision into reality with smart, scalable solutions.</p>
        <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-slate-100 transition-colors">
          Get in Touch
        </button>
      </div>
    </section>
  )
}

export default About
