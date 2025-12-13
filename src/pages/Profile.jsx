import React, { useState, useEffect } from 'react';
import {
    Book,
    PenTool,
    Award,
    Globe,
    ChevronRight,
    Quote,
    Briefcase,
    GraduationCap,
    ScrollText,
    User
} from 'lucide-react';

const ProjectLeaderProfile = () => {
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
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
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200 selection:text-stone-800">
            {/* Navigation (Consistent with Landing Page) */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-serif font-bold tracking-wider text-stone-900 cursor-pointer" onClick={() => window.location.href = '/'}>
                        温州商脉 <span className="text-xs font-sans font-normal tracking-normal text-stone-500 ml-2">数字化工程</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
                        <button onClick={() => scrollToSection('background')} className="hover:text-stone-900 transition-colors">核心背景</button>
                        <button onClick={() => scrollToSection('works')} className="hover:text-stone-900 transition-colors">代表成果</button>
                        <button onClick={() => scrollToSection('methodology')} className="hover:text-stone-900 transition-colors">方法论</button>
                        <button onClick={() => scrollToSection('role')} className="hover:text-stone-900 transition-colors">项目角色</button>
                    </div>
                    <button className="px-5 py-2 border border-stone-900 text-stone-900 text-sm hover:bg-stone-900 hover:text-stone-50 transition-colors rounded-sm">
                        联系咨询
                    </button>
                </div>
            </nav>

            {/* Hero Profile Section */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 bg-gradient-to-b from-stone-100 to-stone-50 border-b border-stone-200">
                <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
                    {/* Portrait Placeholder */}
                    <div className="md:col-span-4 flex justify-center md:justify-end">
                        <div className="w-64 h-80 bg-stone-200 relative shadow-xl border-4 border-white">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400">
                                <User size={64} strokeWidth={1} />
                                <span className="mt-4 text-sm font-serif tracking-widest">[ 照片占位 ]</span>
                            </div>
                            {/* Decorative Frame Element */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-amber-700/30"></div>
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-stone-900/10"></div>
                        </div>
                    </div>

                    {/* Intro Text */}
                    <div className="md:col-span-8 space-y-6">
                        <div className="inline-flex items-center gap-3 text-amber-700 font-medium text-xs tracking-widest uppercase mb-2">
                            <span className="w-8 h-px bg-amber-700"></span>
                            Project Leader Profile
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">
                            郭乐天
                        </h1>
                        <div className="flex flex-wrap gap-3 text-sm font-medium text-stone-600">
                            <span className="px-3 py-1 bg-stone-200/50 rounded-sm">资深媒体人</span>
                            <span className="w-px h-6 bg-stone-300"></span>
                            <span className="px-3 py-1 bg-stone-200/50 rounded-sm">新闻传播研究者</span>
                            <span className="w-px h-6 bg-stone-300"></span>
                            <span className="px-3 py-1 bg-amber-100/50 text-amber-900 rounded-sm">口述史工程方法论设计者</span>
                        </div>

                        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl font-light">
                            长期从事新闻实践与新闻传播研究，深度参与地方媒体转型与媒体融合实践。曾任温州日报报业集团重要管理职务、温州商学院传媒学院首任院长。专注于将复杂实践经验转化为<span className="font-medium text-stone-900">可复用、可核查</span>的知识与方法体系。
                        </p>
                    </div>
                </div>
            </header>

            {/* Core Background */}
            <section id="background" className="py-20 px-6 max-w-5xl mx-auto">
                <h2 className="text-2xl font-serif font-bold mb-12 flex items-center gap-4">
                    <span className="w-2 h-8 bg-stone-800"></span>
                    核心背景
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-stone-800 mb-2">
                            <Briefcase className="text-amber-700" size={24} />
                            <h3 className="text-xl font-bold font-serif">深耕一线的媒体实践者</h3>
                        </div>
                        <div className="pl-9 border-l border-stone-200 space-y-4">
                            <p className="text-stone-600 leading-relaxed text-sm">
                                上世纪80年代进入新闻行业，长期服务于地方主流媒体体系，参与并主导多项媒体改革与融合实践，对地方媒体的组织机制、内容生产流程与公共表达责任具有长期、系统的实践认知。
                            </p>
                            <p className="text-stone-600 leading-relaxed text-sm">
                                在温州媒体体系中，他曾参与地方网络媒体建设与都市类媒体的全媒体转型，相关实践经验被多次总结为行业案例，在业内与高校教学中产生持续影响。
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-stone-800 mb-2">
                            <GraduationCap className="text-amber-700" size={24} />
                            <h3 className="text-xl font-bold font-serif">产学研结合的教育与研究经历</h3>
                        </div>
                        <div className="pl-9 border-l border-stone-200 space-y-4">
                            <p className="text-stone-600 leading-relaxed text-sm">
                                2018年，温州商学院与温州日报报业集团共建传媒学院，受聘为传媒学院首任院长，推动“校媒协同”的应用型人才培养模式，将真实媒体实践引入教学体系。
                            </p>
                            <p className="text-stone-600 leading-relaxed text-sm">
                                长期关注新闻传播变革、网络舆情治理与媒体融合路径，其研究以问题导向、实践反推理论为特征，强调方法必须经得起真实场景检验。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Works & Research */}
            <section id="works" className="py-20 px-6 bg-stone-100 border-y border-stone-200">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl font-serif font-bold mb-12 flex items-center gap-4">
                        <span className="w-2 h-8 bg-amber-700"></span>
                        代表性成果与研究方向
                    </h2>

                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Books - Left Column */}
                        <div className="lg:col-span-7">
                            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6">代表著作 / Publications</h3>
                            <div className="space-y-4">
                                <BookCard
                                    title="《蝶变：温州都市报媒体融合故事》"
                                    desc="系统梳理地方都市类媒体向全媒体转型的实践路径，被多所高校作为媒体融合案例教材使用。"
                                />
                                <BookCard
                                    title="《颠覆的力量》"
                                    desc="探讨新媒体技术对传统传媒结构与传播逻辑的冲击与重构。"
                                />
                                <BookCard
                                    title="《地方网络媒体的创新与发展》"
                                    desc="以地方媒体为研究对象，分析区域网络平台的运营模式与本土化路径。"
                                />
                            </div>
                        </div>

                        {/* Research Topics - Right Column */}
                        <div className="lg:col-span-5">
                            <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-6">研究议题 / Topics</h3>
                            <div className="bg-white p-8 shadow-sm border border-stone-200 h-full">
                                <ul className="space-y-6">
                                    <TopicItem text="媒体融合的组织与流程再造" />
                                    <TopicItem text="网络舆情与公共表达治理" />
                                    <TopicItem text="地方媒体在基层治理中的角色转型" />
                                    <TopicItem text="新闻实践经验的结构化总结与方法输出" />
                                </ul>
                                <div className="mt-8 pt-6 border-t border-stone-100 text-xs text-stone-500 italic">
                                    * 多篇论文与研究成果发表于专业刊物，并被行业奖项与教学案例体系引用。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Philosophy */}
            <section id="methodology" className="py-24 px-6 max-w-5xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-serif font-bold mb-6">方法论取向</h2>
                    <p className="text-lg text-stone-600">为什么适合做“口述史工程”？</p>
                    <div className="w-16 h-1 bg-stone-300 mx-auto mt-6"></div>
                </div>

                <div className="bg-stone-50 border border-stone-200 p-10 md:p-14 relative">
                    <Quote className="absolute top-8 left-8 text-stone-200" size={64} />

                    <div className="relative z-10 space-y-12">
                        <p className="text-lg font-serif text-stone-800 leading-relaxed text-center mb-12">
                            “我不将口述史视为‘回忆录写作’，而是将其视为一项需要<br className="hidden md:block" />
                            <span className="bg-amber-100 px-1">工程化管理的知识生产过程</span>。”
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <MethodItem
                                num="01"
                                title="从实践中来，而非概念先行"
                                text="强调从真实经验、真实选择、真实矛盾中抽象结构，而不是用现成理论套人。"
                            />
                            <MethodItem
                                num="02"
                                title="重视流程、证据与可核查性"
                                text="核心都不在“讲得好听”，而在于是否留得下、查得到、用得上。"
                            />
                            <MethodItem
                                num="03"
                                title="对复杂性保持克制"
                                text="承认个人记忆的局限，通过多轮访谈、证据比对与版本确认，避免单一叙事失真。"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Role in Project */}
            <section id="role" className="py-20 px-6 bg-stone-900 text-stone-300">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-2xl font-serif text-white mb-6">在「温州商脉·口述史工程」中的角色</h2>
                        <div className="text-amber-500 font-bold tracking-widest text-sm mb-8">PROJECT LEADER / ACADEMIC DIRECTOR</div>

                        <ul className="space-y-4">
                            <RoleItem text="设计口述史工程的整体方法体系与技术路线" />
                            <RoleItem text="主导核心人物的深度访谈与关键节点核查" />
                            <RoleItem text="把控文本与影像的学术标准、表达边界与合规风险" />
                            <RoleItem text="统筹案例从“个人记忆”到“公共史料”的转化路径" />
                        </ul>
                    </div>

                    <div className="border border-stone-700 p-8 md:p-10 bg-stone-800/50 backdrop-blur-sm">
                        <ScrollText className="text-stone-500 mb-6" size={32} />
                        <h3 className="text-xl font-serif text-white mb-6">一个长期目标</h3>
                        <p className="text-lg font-light leading-relaxed italic text-stone-400">
                            “让温州第一代企业家的经验，不止存在于个人记忆与零散传说中，而是成为下一代<span className="text-white">可以反复阅读、反复研究、反复对照</span>的历史资料。”
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Links */}
            <footer className="py-16 px-6 bg-stone-100 text-center border-t border-stone-200">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-6">
                    <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-stone-300 text-stone-700 hover:border-stone-400 transition-colors shadow-sm">
                        <Globe size={16} />
                        <span>查看项目方法论</span>
                    </a>
                    <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white hover:bg-stone-800 transition-colors shadow-md">
                        <Book size={16} />
                        <span>查看样板案例：温州“黄渔国”</span>
                    </a>
                    <a href="#" className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-stone-500 hover:text-stone-900 transition-colors underline underline-offset-4">
                        咨询项目合作（保密）
                    </a>
                </div>
                <div className="mt-12 text-xs text-stone-500">
                    &copy; 温州商脉口述史工程组 | 专家介绍
                </div>
            </footer>
        </div>
    );
};

// Sub-components
const BookCard = ({ title, desc }) => (
    <div className="flex gap-4 p-5 bg-white border border-stone-200 hover:border-amber-700/50 transition-colors group">
        <div className="shrink-0 pt-1">
            <Book className="text-stone-400 group-hover:text-amber-700 transition-colors" size={20} />
        </div>
        <div>
            <h4 className="font-serif font-bold text-stone-900 mb-2">{title}</h4>
            <p className="text-sm text-stone-600 leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TopicItem = ({ text }) => (
    <li className="flex items-start gap-3">
        <PenTool className="text-amber-700 shrink-0 mt-1" size={16} />
        <span className="text-stone-800 font-medium">{text}</span>
    </li>
);

const MethodItem = ({ num, title, text }) => (
    <div className="text-center md:text-left">
        <div className="text-3xl font-serif font-bold text-stone-200 mb-2">{num}</div>
        <h4 className="font-bold text-stone-900 mb-3">{title}</h4>
        <p className="text-sm text-stone-600 leading-relaxed">{text}</p>
    </div>
);

const RoleItem = ({ text }) => (
    <li className="flex items-start gap-3">
        <Award className="text-amber-500 shrink-0 mt-1" size={18} />
        <span className="text-stone-300">{text}</span>
    </li>
);

export default ProjectLeaderProfile;