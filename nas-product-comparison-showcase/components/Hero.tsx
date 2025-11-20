import React from 'react';
import { ChevronDown, Database, Zap, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-dark text-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-efc5270f9c63?q=80&w=2668&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-dark to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
          <span className="text-sm font-medium tracking-wide text-blue-100">2025 年度旗舰横评</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 drop-shadow-lg">
          全闪 NAS <br className="md:hidden"/> 巅峰对决
        </h1>
        
        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
          <span className="font-bold text-blue-300">铁威马</span> · 
          <span className="font-bold text-purple-300 mx-2">极空间</span> · 
          <span className="font-bold text-green-300 mx-2">绿联</span> · 
          <span className="font-bold text-red-300">飞牛零刻</span>
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 opacity-80">
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <span className="text-sm font-medium">极致性能</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Database className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-sm font-medium">全闪存架构</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <BarChart3 className="w-6 h-6 text-green-400" />
            </div>
            <span className="text-sm font-medium">深度评测</span>
          </div>
        </div>

        <a href="#products" className="inline-block animate-bounce">
            <div className="flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-colors cursor-pointer">
                <span className="text-sm tracking-widest uppercase">开始探索</span>
                <ChevronDown className="w-6 h-6" />
            </div>
        </a>
      </div>

      {/* Bottom Decoration Line */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
    </section>
  );
};

export default Hero;