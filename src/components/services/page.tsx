import React from 'react'
import { Code, Palette, Smartphone, Zap, Lightbulb, Cog, TrendingUp, Cpu, ShoppingCart, Package, FileText, BarChart3, Rocket, Users, Layers, DollarSign, LayoutDashboard, Lock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

function Services() {
  const serviceCategories = [
    {
      id: 1,
      title: 'Web Design & Development',
      icon: <Code size={32} />,
      items: [
        { label: 'Modern UI/UX Design', icon: <Palette size={20} /> },
        { label: 'Responsive Websites', icon: <Smartphone size={20} /> },
        { label: 'Business & Portfolio Websites', icon: <Zap size={20} /> },
        { label: 'Custom Web Applications', icon: <Code size={20} /> },
      ]
    },
    {
      id: 2,
      title: 'Business Problem Solving',
      icon: <Lightbulb size={32} />,
      items: [
        { label: 'Digital transformation for businesses', icon: <TrendingUp size={20} /> },
        { label: 'Automating manual processes', icon: <Cog size={20} /> },
        { label: 'Custom software solutions', icon: <Cpu size={20} /> },
        { label: 'System optimization', icon: <Zap size={20} /> },
      ]
    },
    {
      id: 3,
      title: 'POS System Development',
      icon: <ShoppingCart size={32} />,
      items: [
        { label: 'Retail POS Systems', icon: <ShoppingCart size={20} /> },
        { label: 'Inventory Management', icon: <Package size={20} /> },
        { label: 'Billing & Invoicing', icon: <FileText size={20} /> },
        { label: 'Reports & Analytics', icon: <BarChart3 size={20} /> },
      ]
    }
  ]

  const whyChooseUs = [
    { icon: <Rocket size={24} />, title: 'Fast & Reliable', desc: 'Quick turnaround without compromising quality' },
    { icon: <Users size={24} />, title: 'Client-Focused', desc: 'Your success is our mission and priority' },
    { icon: <Layers size={24} />, title: 'Scalable', desc: 'Built to grow with your business needs' },
    { icon: <DollarSign size={24} />, title: 'Affordable', desc: 'Transparent pricing, no hidden costs' },
    { icon: <Cpu size={24} />, title: 'Custom Solutions', desc: 'Tailored to your specific requirements' },
    { icon: <Lock size={24} />, title: 'Secure', desc: 'Enterprise-grade security & reliability' },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-6 py-20 mx-auto lg:px-12">
        {/* Header */}
        <motion.header 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary/10">
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold text-transparent bg-gradient-to-r from-slate-900 to-primary bg-clip-text">
            Smart • Scalable • Secure Digital Solutions
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-600">
            Comprehensive technology solutions designed to transform your business and drive growth
          </p>
        </motion.header>

        {/* Service Categories */}
        <div className="grid grid-cols-1 gap-8 mb-20 lg:grid-cols-3">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              className="p-8 transition-all duration-300 bg-white border rounded-2xl border-slate-200 hover:border-primary hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="flex items-center justify-center mb-6 w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl text-primary">
                {category.icon}
              </div>
              <h3 className="mb-6 text-2xl font-bold">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="mt-1 transition-transform text-primary group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="transition-colors text-slate-700 group-hover:text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Why Choose CoreWavez?</h2>
            <p className="text-lg text-slate-600">Industry-leading expertise and commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 transition-all border bg-gradient-to-br from-primary/5 to-transparent rounded-xl border-primary/10 hover:border-primary/30 hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 text-primary">{item.icon}</div>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="p-12 text-center text-white bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="mb-4 text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
            Let's discuss how our solutions can help you achieve your goals
          </p>
          <motion.button 
            className="flex items-center justify-center gap-2 px-8 py-4 mx-auto font-bold transition-shadow bg-white rounded-lg text-primary hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
