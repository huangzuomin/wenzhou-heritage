import React, { useState, useEffect } from 'react';
import {
    Map,
    Compass,
    Feather,
    Globe,
    Award,
    Quote,
    Users,
    BookOpen,
    Footprints,
    User
} from 'lucide-react';

const ExpertProfileLi = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-100 selection:text-stone-900">
            {/* Navigation (Consistent) */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-serif font-bold tracking-wider text-stone-900 cursor-pointer" onClick={() => window.location.href = '/'}>
                        温州商脉 <span className="text-xs font-sans font-normal tracking-normal text-stone-500 ml-2">数字化工程</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
                        <button onClick={() => scrollToSection('resume')} className="hover:text-stone-900 transition-colors">核心履历</button>
                        <button onClick={() => scrollToSection('methodology')} className="hover:text-stone-900 transition-colors">方法论贡献</button>
                        <button onClick={() => scrollToSection('role')} className="hover:text-stone-900 transition-colors">项目角色</button>
                    </div>
                    <button className="px-5 py-2 border border-stone-900 text-stone-900 text-sm hover:bg-stone-900 hover:text-stone-50 transition-colors rounded-sm">
                        联系咨询
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 border-b border-stone-200 bg-[#FDFCF8]">
                <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">
                    {/* Image Area */}
                    <div className="md:col-span-4 relative group">
                        <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden shadow-lg">
                            <img
                                src="/李希光.jpeg"
                                alt="李希光"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r border-b border-stone-300 -z-10"></div>
                    </div>

                    {/* Text Area */}
                    <div className="md:col-span-8 pt-4">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-amber-600"></span>
                            <span className="text-amber-700 font-bold text-xs tracking-[0.2em] uppercase">Core Expert Profile</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
                            李希光
                        </h1>

                        <div className="flex flex-col gap-2 text-stone-600 mb-8 font-medium">
                            <div className="flex items-center gap-2">
                                <Award size={16} className="text-amber-600" />
                                <span>清华大学国际传播研究中心主任</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <BookOpen size={16} className="text-amber-600" />
                                <span>资深新闻教育家 ｜ “大篷车课堂”创立者</span>
                            </div>
                        </div>

                        <p className="text-lg text-stone-600 leading-relaxed font-light max-w-2xl border-l-2 border-stone-200 pl-6">
                            当代中国新闻传播学界极具实践精神的领军学者。拥有从新华社高级编辑到哈佛大学研究员的跨界履历。
                            <br /><br />
                            <span className="font-medium text-stone-900">长期致力于在“行走”中重构新闻教育与历史记录的边界。</span>
                        </p>
                    </div>
                </div>
            </header>

            {/* Resume Section */}
            <section id="resume" className="py-20 px-6 max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24">
                    {/* Column 1 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-2">
                            <Globe className="text-stone-800" size={28} strokeWidth={1.5} />
                            <h3 className="text-xl font-serif font-bold">兼具国际视野与本土根基</h3>
                        </div>
                        <p className="text-stone-600 text-sm leading-7 text-justify">
                            毕业于南京大学外文系与中国社科院研究生院，早年任职新华社，曾任政治新闻采编室主任及《华盛顿邮报》科学版访问记者。
                            现担任联合国教科文组织（UNESCO）媒介素养与文明对话教席负责人。学术足迹遍布全球，曾获巴基斯坦总统授予的“卓越领袖勋章”。
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 mb-2">
                            <Compass className="text-stone-800" size={28} strokeWidth={1.5} />
                            <h3 className="text-xl font-serif font-bold">“在场”新闻学的践行者</h3>
                        </div>
                        <p className="text-stone-600 text-sm leading-7 text-justify">
                            不同于书斋式研究，坚持“新闻发生在哪里，课堂就在哪里”。曾多次深入中巴经济走廊、兴都库什山脉及北极航道进行跨文化考察。
                            主张通过高强度的现场写作与深度的文明对话，还原被碎片化信息遮蔽的历史真实。
                        </p>
                    </div>
                </div>
            </section>

            {/* Methodology Section (Highlight) */}
            <section id="methodology" className="py-24 px-6 bg-stone-900 text-stone-300 relative overflow-hidden">
                {/* Abstract Background Element */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-white"></div>
                    <div className="absolute top-20 right-20 w-72 h-72 rounded-full border border-white"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">方法论贡献</h2>
                        <p className="text-stone-400 max-w-2xl mx-auto">
                            为什么李希光教授的<span className="text-amber-500 mx-1">“大篷车课堂”</span>方法论<br />对“温州商脉”口述史工程至关重要？
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <MethodCard
                            icon={<Feather size={32} />}
                            title="慢新闻与心灵体验"
                            subtitle="Mindful Journalism"
                            desc="在流量时代反其道而行。不追求短平快的流量故事，而是要求访谈者成为受访者的“心灵参与者”，剥离浮躁商业包装，触达最本真的决策心路。"
                        />
                        <MethodCard
                            icon={<Map size={32} />}
                            title="“无媒体生存”式独立考证"
                            subtitle="Independent Verification"
                            desc="脱离互联网搜索，完全依赖第一手观察、实物考证与人际访谈。在本项目中，意味着直接从当事人、原始票据、老照片与现场遗迹中构建“证据链”。"
                        />
                        <MethodCard
                            icon={<Footprints size={32} />}
                            title="用脚底板做学问"
                            subtitle="On-the-Road Pedagogy"
                            desc="温州人的历史是“走”出来的。李希光主张的“学在路上”与温州企业家“四千精神”高度互构。沿着创业轨迹回溯考察，确证口述史的空间真实性。"
                        />
                    </div>
                </div>
            </section>

            {/* Role Section */}
            <section id="role" className="py-20 px-6 bg-amber-50/50">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-10 justify-center">
                        <span className="h-px w-12 bg-stone-300"></span>
                        <span className="text-stone-500 font-bold text-xs uppercase tracking-widest">Project Role</span>
                        <span className="h-px w-12 bg-stone-300"></span>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-stone-900">首席学术顾问 / 方法论导师</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <RoleItem title="构建“田野调查”标准" desc="指导团队将新闻采编技巧转化为严谨的口述史田野调查规范。" />
                        <RoleItem title="全球视野的叙事重构" desc="利用国际传播背景，将家族企业的微观发家史置于全球化变迁的宏观坐标中。" />
                        <RoleItem title="跨文化视角校准" desc="针对拥有海外经历的温商群体，提供跨文化视角的史料甄别与叙事指导。" />
                    </div>
                </div>
            </section>

            {/* Quote Footer */}
            <section className="py-24 px-6 bg-white border-t border-stone-200">
                <div className="max-w-4xl mx-auto relative">
                    <Quote className="absolute -top-8 -left-8 text-stone-100 transform -scale-x-100" size={80} />
                    <div className="relative z-10 text-center">
                        <p className="text-xl md:text-2xl font-serif font-medium text-stone-800 leading-relaxed italic mb-8">
                            “我们记录历史，不是为了猎奇，而是为了在喧嚣的信息废墟中，找回那些被遗忘的、带有体温的文明碎片。温州商人的故事，是中国改革开放最生动的注脚，值得用最严肃的学术态度去打捞。”
                        </p>
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-amber-600"></span>
                            <span className="font-bold text-stone-900">李希光</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-8 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-400">
                &copy; 温州商脉口述史工程组 | 核心专家介绍
            </footer>
        </div>
    );
};

// Sub-components
const MethodCard = ({ icon, title, subtitle, desc }) => (
    <div className="bg-stone-800 p-8 border border-stone-700 hover:border-amber-700/50 transition-colors group">
        <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
            {icon}
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-1">{title}</h3>
        <p className="text-xs text-stone-500 uppercase tracking-wider mb-4 font-medium">{subtitle}</p>
        <p className="text-stone-400 text-sm leading-relaxed border-t border-stone-700 pt-4">
            {desc}
        </p>
    </div>
);

const RoleItem = ({ title, desc }) => (
    <div className="bg-white p-6 shadow-sm border border-stone-100 text-center">
        <h4 className="font-serif font-bold text-stone-900 mb-3">{title}</h4>
        <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
    </div>
);

export default ExpertProfileLi;