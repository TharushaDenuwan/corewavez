import React from 'react'
import { ExternalLink, Github, Code2, Database, Smartphone } from 'lucide-react'

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.',
      image: '/portfolio-1.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      icon: <Smartphone size={24} />
    },
    {
      id: 2,
      title: 'Inventory Management System',
      description: 'Custom inventory tracking system for retail businesses with real-time stock updates and reporting.',
      image: '/portfolio-2.jpg',
      tags: ['React', 'TypeScript', 'PostgreSQL', 'Express'],
      link: '#',
      github: '#',
      icon: <Database size={24} />
    },
    {
      id: 3,
      title: 'POS & Billing System',
      description: 'Modern point-of-sale system with billing, inventory, and comprehensive analytics dashboard.',
      image: '/portfolio-3.jpg',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      link: '#',
      github: '#',
      icon: <Code2 size={24} />
    },
    {
      id: 4,
      title: 'Business Dashboard',
      description: 'Executive dashboard with real-time data visualization and business metrics.',
      image: '/portfolio-4.jpg',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js'],
      link: '#',
      github: '#',
      icon: <Code2 size={24} />
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website for a creative agency with smooth animations.',
      image: '/portfolio-5.jpg',
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      link: '#',
      github: '#',
      icon: <Smartphone size={24} />
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      image: '/portfolio-6.jpg',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      link: '#',
      github: '#',
      icon: <Database size={24} />
    }
  ]

  return (
    <section className="container mx-auto px-6 lg:px-12 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold mb-2">Our Portfolio</h1>
        <p className="text-lg text-slate-600">Showcase of our recent projects and success stories</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image Placeholder */}
            <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-slate-400 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
              <div className="text-primary/40">{project.icon}</div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.link}
                  className="flex-1 px-3 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  View Project
                </a>
                <a
                  href={project.github}
                  className="px-3 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
