import React, { useState, useEffect } from 'react';
import {
    BookOpen,
    History,
    ShieldCheck,
    Video,
    FileText,
    Database,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    Users,
    Landmark,
    Clock,
    Archive
} from 'lucide-react';
import { Link } from 'react-router-dom';

const WenzhouHeritage = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-serif font-bold tracking-wider text-stone-900">
                        温州商脉 <span className="text-xs font-sans font-normal tracking-normal text-stone-500 ml-2">数字化工程</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
                        <button onClick={() => scrollToSection('whynow')} className="hover:text-stone-900 transition-colors">缘起</button>
                        <Link to="/leader-profile" className="hover:text-stone-900 transition-colors">负责人</Link>
                        <button onClick={() => scrollToSection('deliverables')} className="hover:text-stone-900 transition-colors">交付</button>
                        <button onClick={() => scrollToSection('case')} className="hover:text-stone-900 transition-colors">案例</button>
                        <button onClick={() => scrollToSection('cooperation')} className="hover:text-stone-900 transition-colors">合作</button>
                        <button onClick={() => scrollToSection('faq')} className="hover:text-stone-900 transition-colors">常见问题</button>
                    </div>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-5 py-2 bg-stone-900 text-stone-50 text-sm hover:bg-stone-800 transition-colors rounded-sm"
                    >
                        立即咨询
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 bg-gradient-to-b from-stone-100 to-stone-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-6 px-3 py-1 border border-stone-300 rounded-full text-xs tracking-widest text-stone-500 uppercase">
                        ORAL HISTORY & DIGITAL ARCHIVES
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6 leading-tight">
                        第一代民营企业家<br />
                        <span className="italic font-light text-stone-600">口述史抢救与数字化工程</span>
                    </h1>
                    <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        把一代人的创业记忆，做成可传承、可检索、可引用的数字档案。
                        为温州商业文明留下可信的第一手史料，也为家族企业沉淀可持续的精神资产。
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button className="px-8 py-3 bg-stone-900 text-white rounded-sm hover:bg-stone-800 transition-shadow hover:shadow-lg flex items-center justify-center gap-2">
                            <span>看样板案例 (Case #001)</span>
                            <ArrowRight size={16} />
                        </button>
                        <button className="px-8 py-3 border border-stone-300 text-stone-700 rounded-sm hover:bg-stone-100 transition-colors">
                            家族/企业传承录咨询
                        </button>
                        <button className="px-8 py-3 border border-transparent text-stone-500 hover:text-stone-900 underline underline-offset-4 decoration-stone-300">
                            公共文化/课题合作
                        </button>
                    </div>
                </div>
            </header>

            {/* Why Now */}
            <section id="whynow" className="py-20 px-6 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-700 mb-4">
                            <Clock size={24} />
                        </div>
                        <h3 className="text-xl font-serif font-bold">时间窗口在收窄</h3>
                        <p className="text-stone-600 leading-relaxed text-sm">
                            第一代温州民营企业家多为"40后""50后"，正处在记忆流失的窗口期。越晚越难还原关键现场与决策语境。
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-700 mb-4">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-xl font-serif font-bold">公共史料缺口明显</h3>
                        <p className="text-stone-600 leading-relaxed text-sm">
                            宏观数据很多，微观创业史、家族选择与心路历程却高度稀缺。我们需要补充历史的"毛细血管"。
                        </p>
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center text-stone-700 mb-4">
                            <Landmark size={24} />
                        </div>
                        <h3 className="text-xl font-serif font-bold">“企二代接班”的精神底座</h3>
                        <p className="text-stone-600 leading-relaxed text-sm">
                            制度能复制，家风与决策哲学难复制。口述史是把抽象的"精神传承"做成可交付产品的少数路径。
                        </p>
                    </div>
                </div>
            </section>

            {/* Philosophy Banner */}
            <section className="py-16 bg-stone-900 text-stone-300 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <h2 className="text-2xl md:text-3xl font-serif text-white">我们做的不是“写一本书”</h2>
                    <div className="w-20 h-px bg-stone-600 mx-auto"></div>
                    <p className="text-lg font-light leading-relaxed">
                        我们把口述史当作一项<span className="text-white font-medium">标准化工程</span>来做——<br />
                        像修一条可追溯的证据链，而不是写一篇好看的故事。
                    </p>
                </div>
            </section>

            {/* Deliverables */}
            <section id="deliverables" className="py-24 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold mb-4">交付形态</h2>
                        <p className="text-stone-500">可按需组合的标准化数字资产</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <DeliverableCard
                            icon={<Users />}
                            title="人物口述史主卷"
                            desc="完整叙事 + 关键节点时间线 + 访谈原始证据指引。"
                        />
                        <DeliverableCard
                            icon={<Video />}
                            title="影像口述切片"
                            desc="可传播的公开视频节选 + 内部完整版素材库。"
                        />
                        <DeliverableCard
                            icon={<ShieldCheck />}
                            title="家族传承录（非公开）"
                            desc="家训整理、家族影像修复、内部精装印制。"
                        />
                        <DeliverableCard
                            icon={<History />}
                            title="企业修史/周年特刊"
                            desc="企业编年史、重大决策档案、文化展陈内容底稿。"
                        />
                        <DeliverableCard
                            icon={<Database />}
                            title="数字档案库"
                            desc="结构化元数据、检索标签、版本管理与授权访问。"
                        />
                        <DeliverableCard
                            icon={<Archive />}
                            title="展陈/博物馆内容策展"
                            desc="基于口述史料的实物征集清单与叙事脚本。"
                        />
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-20 px-6 bg-stone-100">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold mb-6">方法与标准</h2>
                            <p className="text-stone-600 mb-8">一套“可核查”的口述史流程，确保史料的严肃性与传世价值。</p>

                            <ul className="space-y-6">
                                <Step number="01" title="选题与谱系梳理" desc="人物关系、关键企业史节点、争议点清单" />
                                <Step number="02" title="深度访谈（多轮）" desc="叙事建骨 → 事实核查 → 反思拔高" />
                                <Step number="03" title="证据链校核" desc="时间、地点、人名、事件、文件与影像互证" />
                                <Step number="04" title="审阅确认与版本冻结" desc="受访者书面确认，留痕归档" />
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-200">
                            <h3 className="text-xl font-serif font-bold mb-6 text-stone-800">我们坚持三条底线</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1 w-1 h-12 bg-stone-300 shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">尊重事实，不做软文</h4>
                                        <p className="text-sm text-stone-600 mt-1">不回避复杂性，但拒绝无依据拔高。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 w-1 h-12 bg-stone-300 shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">内容合规优先</h4>
                                        <p className="text-sm text-stone-600 mt-1">严格划清口述史与商业机密、敏感议题边界。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1 w-1 h-12 bg-stone-300 shrink-0"></div>
                                    <div>
                                        <h4 className="font-bold text-stone-900">客户确认机制</h4>
                                        <p className="text-sm text-stone-600 mt-1">所有对外发布内容均经书面确认或授权。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section id="case" className="py-24 px-6 bg-stone-800 text-stone-200">
                <div className="max-w-5xl mx-auto border border-stone-600 p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative background number */}
                    <div className="absolute top-0 right-0 text-9xl font-bold text-stone-700 opacity-20 -mr-10 -mt-10 font-serif">
                        001
                    </div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-amber-500 font-mono text-sm mb-4 tracking-widest">SAMPLE CASE</div>
                            <h2 className="text-3xl font-serif text-white mb-4">沧海遗珠的重生：<br />温州“黄渔国”创始人口述史</h2>
                            <p className="text-stone-400 mb-6 leading-relaxed">
                                以大黄鱼资源兴衰为历史背景，沿着“海的记忆—技术苦旅—商业博弈—生态与未来”的主线，构建企业家个人叙事与产业生态史的交叉证据链。
                            </p>
                            <div className="text-sm text-stone-500 mb-8 border-l-2 border-stone-600 pl-4">
                                说明：公开展示为节选版；完整档案在授权与保密机制下开放。
                            </div>
                            <button className="px-6 py-2 border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-white transition-colors">
                                查看案例详情
                            </button>
                        </div>
                        <div className="aspect-video bg-stone-900 flex items-center justify-center border border-stone-700">
                            <span className="text-stone-600 font-light flex flex-col items-center gap-2">
                                <Video size={32} />
                                <span>[ 影像资料占位符 ]</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cooperation Models */}
            <section id="cooperation" className="py-24 px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold">合作方式</h2>
                    <div className="w-10 h-1 bg-stone-900 mx-auto mt-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Card */}
                    <div className="bg-stone-50 p-10 border-t-4 border-stone-300 hover:border-stone-500 transition-colors">
                        <div className="mb-6">
                            <h3 className="text-2xl font-serif font-bold text-stone-900">公共文化与学术研究</h3>
                            <p className="text-stone-500 mt-1">侧重背书与社会价值</p>
                        </div>
                        <ul className="space-y-4 mb-8 text-stone-700">
                            <li className="flex gap-2 items-start"><span className="text-stone-400">•</span> 社科课题合作：口述实录研究、地方商业文明史料整理</li>
                            <li className="flex gap-2 items-start"><span className="text-stone-400">•</span> 文化基金/影像志：温州民营经济发展史影像化记录</li>
                            <li className="flex gap-2 items-start"><span className="text-stone-400">•</span> 政府购买服务：史料征集、档案整理、专题研究外包</li>
                        </ul>
                        <button className="w-full py-3 border border-stone-300 text-stone-900 hover:bg-stone-200 transition-colors">
                            申请合作
                        </button>
                    </div>

                    {/* Right Card */}
                    <div className="bg-stone-50 p-10 border-t-4 border-amber-700 shadow-sm">
                        <div className="mb-6">
                            <h3 className="text-2xl font-serif font-bold text-stone-900">家族传承与企业修史</h3>
                            <p className="text-amber-800 mt-1">侧重精神资产沉淀与内部传承</p>
                        </div>
                        <ul className="space-y-4 mb-8 text-stone-700">
                            <li className="flex gap-2 items-start"><span className="text-amber-700">•</span> 《家族传承录》（非公开）：10–20小时深访+影像修复+精装印制</li>
                            <li className="flex gap-2 items-start"><span className="text-amber-700">•</span> 企业发展史/周年项目：编年史+口述访谈+组织记忆体系化</li>
                            <li className="flex gap-2 items-start"><span className="text-amber-700">•</span> 企业展厅/博物馆策展：叙事大纲、展品清单、展陈脚本</li>
                        </ul>
                        <button className="w-full py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors">
                            预约保密咨询
                        </button>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 px-6 bg-stone-100 border-y border-stone-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xl font-serif font-bold mb-8">我们的团队机制：专家领衔 + 轻资产协作</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-6 shadow-sm">
                            <h4 className="font-bold text-stone-900 mb-2">学术总监/项目负责人</h4>
                            <p className="text-sm text-stone-600 mb-2">负责方法体系、核心深访与终审</p>
                            <Link to="/leader-profile" className="text-xs text-amber-700 font-medium hover:underline">
                                查看详细介绍 &rarr;
                            </Link>
                        </div>
                        <div className="bg-white p-6 shadow-sm">
                            <h4 className="font-bold text-stone-900 mb-2">采编研究团队</h4>
                            <p className="text-sm text-stone-600">资料搜集、整理、初稿撰写与事实核查</p>
                        </div>
                        <div className="bg-white p-6 shadow-sm">
                            <h4 className="font-bold text-stone-900 mb-2">法律/合规顾问</h4>
                            <p className="text-sm text-stone-600">边界把控、授权与风险审查</p>
                        </div>
                    </div>
                    <p className="mt-8 text-stone-500 text-sm">已与高校与行业机构建立合作机制，保障研究深度与生产效率。</p>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-20 px-6 max-w-3xl mx-auto">
                <h2 className="text-2xl font-serif font-bold text-center mb-12">常见问题</h2>
                <div className="space-y-4">
                    <FaqItem
                        question="Q1：口述史和企业传记有什么区别？"
                        answer="传记更像叙事产品，侧重文学性和可读性；口述史必须保留原始证据路径、核查记录与版本留痕，具备史料价值，可被研究与引用。"
                        isOpen={activeFaq === 0}
                        onClick={() => toggleFaq(0)}
                    />
                    <FaqItem
                        question="Q2：内容会公开吗？"
                        answer="默认分级：公开节选版 / 内部交流版 / 保密收藏版。是否公开、公开到什么程度，完全由授权决定。"
                        isOpen={activeFaq === 1}
                        onClick={() => toggleFaq(1)}
                    />
                    <FaqItem
                        question="Q3：周期多久？"
                        answer="取决于访谈时长与史料复杂度。一般项目需3-6个月。我们更重视“核查与确认”环节，避免快写快发带来的事实风险。"
                        isOpen={activeFaq === 2}
                        onClick={() => toggleFaq(2)}
                    />
                    <FaqItem
                        question="Q4：如何保证合规与隐私？"
                        answer="签署严格的保密与授权协议；敏感内容不进入公开版；所有发布内容均经书面确认与版本冻结。"
                        isOpen={activeFaq === 3}
                        onClick={() => toggleFaq(3)}
                    />
                </div>
            </section>

            {/* CTA Footer */}
            <section id="contact" className="py-24 px-6 bg-stone-900 text-stone-400 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">现在就开始</h2>
                    <p className="text-lg mb-10 font-light">把“还来得及”的记忆，变成下一代可继承的资产。</p>

                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                        <button className="w-full py-4 bg-amber-700 text-white font-medium hover:bg-amber-600 transition-colors rounded-sm shadow-lg">
                            我要做家族/企业传承录（保密咨询）
                        </button>
                        <button className="w-full py-4 bg-transparent border border-stone-600 hover:bg-stone-800 transition-colors rounded-sm text-stone-300">
                            我要做课题/公共文化合作（合作申请）
                        </button>
                        <button className="mt-4 text-sm text-stone-500 hover:text-stone-300 underline underline-offset-4">
                            我要先看样板案例（Case #001）
                        </button>
                    </div>

                    <div className="mt-16 pt-8 border-t border-stone-800 text-xs text-stone-600">
                        &copy; {new Date().getFullYear()} 温州商脉口述史工程组. All Rights Reserved.
                    </div>
                </div>
            </section>
        </div>
    );
};

// Sub-components for cleaner code
const DeliverableCard = ({ icon, title, desc }) => (
    <div className="p-6 border border-stone-100 hover:border-stone-300 hover:shadow-md transition-all group bg-stone-50">
        <div className="text-stone-400 group-hover:text-stone-900 transition-colors mb-4">
            {icon}
        </div>
        <h3 className="font-bold text-stone-800 mb-2">{title}</h3>
        <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
    </div>
);

const Step = ({ number, title, desc }) => (
    <div className="flex gap-6 items-start">
        <div className="text-2xl font-serif font-bold text-stone-300">{number}</div>
        <div>
            <h4 className="text-lg font-bold text-stone-800">{title}</h4>
            <p className="text-stone-600 mt-1 text-sm">{desc}</p>
        </div>
    </div>
);

const FaqItem = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-stone-200">
        <button
            className="w-full py-4 flex justify-between items-center text-left hover:text-amber-700 transition-colors"
            onClick={onClick}
        >
            <span className="font-medium text-stone-800">{question}</span>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-4' : 'max-h-0'}`}>
            <p className="text-stone-600 text-sm leading-relaxed pr-8">{answer}</p>
        </div>
    </div>
);

export default WenzhouHeritage;