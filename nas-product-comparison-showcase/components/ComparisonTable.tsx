import React from 'react';
import { comparisonData } from '../constants';

const ComparisonTable: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50" id="comparison">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">参数横向对比</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">全方位数据对比，助你做出明智选择</p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr>
                                    <th className="bg-slate-100 p-6 text-left text-slate-500 font-semibold w-1/6">核心参数</th>
                                    <th className="bg-blue-50 p-6 text-center text-blue-900 font-bold w-1/5 border-l border-white">
                                        铁威马<br/><span className="text-xs font-normal opacity-75">F8 SSD Plus</span>
                                    </th>
                                    <th className="bg-purple-50 p-6 text-center text-purple-900 font-bold w-1/5 border-l border-white">
                                        极空间<br/><span className="text-xs font-normal opacity-75">Z4Pro+</span>
                                    </th>
                                    <th className="bg-green-50 p-6 text-center text-green-900 font-bold w-1/5 border-l border-white">
                                        绿联<br/><span className="text-xs font-normal opacity-75">DXP4800+</span>
                                    </th>
                                    <th className="bg-red-50 p-6 text-center text-red-900 font-bold w-1/5 border-l border-white">
                                        飞牛零刻<br/><span className="text-xs font-normal opacity-75">ME mini</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                                        <td className="p-5 text-slate-500 font-medium bg-slate-50/50 group-hover:bg-slate-100 transition-colors">
                                            {row.parameter}
                                        </td>
                                        <td className="p-5 text-center text-slate-700 font-medium border-l border-slate-100">{row.terra}</td>
                                        <td className="p-5 text-center text-slate-700 font-medium border-l border-slate-100">{row.zspace}</td>
                                        <td className="p-5 text-center text-slate-700 font-medium border-l border-slate-100">{row.ugreen}</td>
                                        <td className="p-5 text-center text-slate-700 font-medium border-l border-slate-100">{row.fn}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 bg-slate-50 text-center text-xs text-slate-400 border-t border-slate-200">
                        * 数据基于2025年11月市场信息，仅供参考，具体以官方发布为准
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;