import React from 'react';
import { recommendations } from '../constants';

const Summary: React.FC = () => {
    return (
        <section className="py-24 bg-white" id="summary">
            <div className="container max-w-6xl mx-auto px-6">
                 <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-brand-light rounded-full text-brand-primary mb-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">选购指南与建议</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        每款产品都有其独特的定位。不买最贵，只买最对。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {recommendations.map((item) => (
                        <div key={item.id} className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 p-8">
                            <div className="flex items-start gap-6">
                                <div className={`p-4 rounded-xl shadow-lg shrink-0 text-white ${item.colorClass} group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            {/* Decorative background blur */}
                            <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl ${item.colorClass}`}></div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 bg-gradient-to-r from-brand-dark to-brand-primary rounded-2xl text-center text-white shadow-2xl">
                    <h3 className="text-2xl font-bold mb-4">想要了解更多细节？</h3>
                    <p className="mb-8 text-blue-100">关注我们的后续深度评测文章</p>
                    <button className="px-8 py-3 bg-white text-brand-primary font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg">
                        订阅更新
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Summary;