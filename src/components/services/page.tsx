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
      <div className="container mx-auto px-6 lg:px-12 py-20">
        {/* Header */}
        <motion.header 
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-semibold text-sm">Our Services</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-primary bg-clip-text text-transparent">
            Smart • Scalable • Secure Digital Solutions
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth
          </p>
        </motion.header>

        {/* Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center text-primary mb-6">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="text-primary mt-1 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 group-hover:text-primary transition-colors">{item.label}</span>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose CoreWavez?</h2>
            <p className="text-lg text-slate-600">Industry-leading expertise and commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="text-primary mb-4">{item.icon}</div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white rounded-3xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your goals
          </p>
          <motion.button 
            className="px-8 py-4 bg-white text-primary rounded-lg font-bold flex items-center justify-center gap-2 mx-auto hover:shadow-xl transition-shadow"
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
