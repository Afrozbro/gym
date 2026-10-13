"use client";
import React, { useState } from 'react';
import { Dumbbell, ArrowRight, Sun, Moon, Play } from 'lucide-react';

const GymHero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`${isDarkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 font-sans`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-2 rounded-lg">
            <Dumbbell size={24} className="text-white" />
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase italic">TitanCore</span>
        </div>
        
        <div className="flex items-center gap-8">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${isDarkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-200 text-slate-600'}`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full font-bold text-white transition-all shadow-lg shadow-orange-500/20">
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 font-medium text-sm">
            #1 FITNESS DESTINATION IN THE CITY
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic">
            Refuse to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Be Average.
            </span>
          </h1>

          <p className={`text-lg max-w-md ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Elite coaching, world-class equipment, and a community that pushes you to your absolute limits. Your transformation begins where your comfort zone ends.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-orange-500/30">
              Start Your Journey <ArrowRight size={20} />
            </button>
            <button className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-all ${isDarkMode ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-200 hover:bg-slate-200'}`}>
              <Play size={20} fill="currentColor" /> Watch Promo
            </button>
          </div>

          <div className="flex items-center gap-6 pt-8">
            <div>
              <p className="text-3xl font-black">500+</p>
              <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Active Members</p>
            </div>
            <div className={`h-12 w-px ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}></div>
            <div>
              <p className="text-3xl font-black">15+</p>
              <p className={`text-sm ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>Expert Coaches</p>
            </div>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-2xl group-hover:bg-orange-500/30 transition-all duration-500"></div>
          <div className={`relative rounded-3xl overflow-hidden border ${isDarkMode ? 'border-slate-800' : 'border-slate-200 shadow-2xl'}`}>
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
              alt="Gym workout" 
              className="w-full h-[600px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full border-2 border-orange-500 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=33" alt="trainer" />
                </div>
                <div>
                  <p className="text-white font-bold">Coach Marcus</p>
                  <p className="text-orange-500 text-sm">Head of Strength & Conditioning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GymHero;