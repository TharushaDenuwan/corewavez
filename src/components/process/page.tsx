import React from 'react'
import { CheckCircle, Lightbulb, Code, TestTube, Rocket, BarChart3, ClipboardList, Users } from 'lucide-react'

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

  return (
    <section className="container mx-auto px-6 lg:px-12 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-semibold mb-2">Our Process</h1>
        <p className="text-lg text-slate-600">A structured approach to delivering exceptional results</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex gap-4">
            {/* Step Number & Icon */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                {step.icon}
              </div>
              {idx < steps.length - 1 && <div className="w-1 h-16 bg-primary/20" />}
            </div>

            {/* Step Content */}
            <div className="pb-8">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Step {step.id}</span>
              </div>
              <p className="text-slate-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Why Our Process Works */}
      <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Users size={28} className="text-primary" />Why Our Process Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-primary">Collaboration</h4>
            <p className="text-slate-600">We work closely with you at every step, ensuring your vision is brought to life exactly as you envision it.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-primary">Quality Assurance</h4>
            <p className="text-slate-600">Rigorous testing and quality checks at every stage guarantee a robust, bug-free final product.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-primary">Scalability</h4>
            <p className="text-slate-600">Our solutions are built with future growth in mind, ready to scale with your business needs.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
