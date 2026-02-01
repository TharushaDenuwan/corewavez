import React from 'react'
import { Code, Palette, Smartphone, Zap, Lightbulb, Cog, TrendingUp, Cpu, ShoppingCart, Package, FileText, BarChart3, Rocket, Users, Layers, DollarSign, LayoutDashboard, Lock } from 'lucide-react'

function Services() {
  return (
    <section className="container mx-auto px-6 lg:px-12 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-semibold mb-2">Services</h1>
        <p className="text-lg text-slate-600">Smart • Scalable • Secure Digital Solutions</p>
      </header>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><Code size={28} className="text-primary" />Web Design & Development</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li className="flex items-start gap-2"><Palette size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Modern UI/UX Design</span></li>
            <li className="flex items-start gap-2"><Smartphone size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Responsive Websites</span></li>
            <li className="flex items-start gap-2"><Zap size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Business & Portfolio Websites</span></li>
            <li className="flex items-start gap-2"><Code size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Custom Web Applications</span></li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2"><Lightbulb size={28} className="text-primary" />Business Problem Solving</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li className="flex items-start gap-2"><TrendingUp size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Digital transformation for businesses</span></li>
            <li className="flex items-start gap-2"><Cog size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Automating manual processes</span></li>
            <li className="flex items-start gap-2"><Cpu size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Custom software solutions</span></li>
            <li className="flex items-start gap-2"><Zap size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>System optimization</span></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2"><ShoppingCart size={28} className="text-primary" />POS System Development</h2>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            <li className="flex items-start gap-2"><ShoppingCart size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Retail POS Systems</span></li>
            <li className="flex items-start gap-2"><Package size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Inventory Management</span></li>
            <li className="flex items-start gap-2"><FileText size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Billing & Invoicing</span></li>
            <li className="flex items-start gap-2"><BarChart3 size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Reports & Analytics</span></li>
          </ul>

          <div className="mt-8 p-6 rounded-lg bg-primary/5">
            <h3 className="text-xl font-semibold mb-3">Smart • Scalable • Secure Digital Solutions</h3>
            <p className="text-slate-700">We build reliable, future-ready systems designed to grow with your business.</p>
          </div>
        </div>
      </div>

      <aside className="mt-12 bg-slate-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Rocket size={28} className="text-primary" />WHY COREWAVEZ?</h2>
        <ul className="space-y-3 text-slate-700">
          <li className="flex items-start gap-3"><Zap size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Fast & Reliable Solutions</span></li>
          <li className="flex items-start gap-3"><Users size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Client-Focused Approach</span></li>
          <li className="flex items-start gap-3"><Layers size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Scalable & Future-Ready Systems</span></li>
          <li className="flex items-start gap-3"><DollarSign size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Affordable Pricing</span></li>
          <li className="flex items-start gap-3"><Cpu size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Custom Software Solutions & Tailor-made systems</span></li>
          <li className="flex items-start gap-3"><LayoutDashboard size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Admin Panels & Dashboards</span></li>
          <li className="flex items-start gap-3"><Lock size={20} className="text-primary mt-0.5 flex-shrink-0" /><span>Secure & scalable architecture</span></li>
        </ul>
      </aside>
    </section>
  )
}

export default Services;
