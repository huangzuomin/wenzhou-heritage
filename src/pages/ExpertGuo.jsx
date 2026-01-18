import React, { useState, useEffect } from 'react';
import {
    TrendingUp,
    Activity,
    Cpu,
    Briefcase,
    Award,
    Quote,
    Search,
    GitMerge,
    Landmark,
    User
} from 'lucide-react';

const ExpertProfileGuo = () => {
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
        <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-stone-200 selection:text-stone-900">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-serif font-bold tracking-wider text-stone-900 cursor-pointer" onClick={() => window.location.href = '/'}>
                        温州商脉 <span className="text-xs font-sans font-normal tracking-normal text-stone-500 ml-2">数字化工程</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
                        <button onClick={() => scrollToSection('resume')} className="hover:text-stone-900 transition-colors">跨界履历</button>
                        <button onClick={() => scrollToSection('methodology')} className="hover:text-stone-900 transition-colors">研究体系</button>
                        <button onClick={() => scrollToSection('role')} className="hover:text-stone-900 transition-colors">项目角色</button>
                    </div>
                    <button className="px-5 py-2 border border-stone-900 text-stone-900 text-sm hover:bg-stone-900 hover:text-stone-50 transition-colors rounded-sm">
                        联系咨询
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 md:pt-48 md:pb-24 px-6 border-b border-stone-200 bg-[#FDFCF8]">
                <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-center">
                    {/* Text Area (Left aligned for contrast with Li's page) */}
                    <div className="md:col-span-8 order-2 md:order-1">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-stone-400"></span>
                            <span className="text-stone-500 font-bold text-xs tracking-[0.2em] uppercase">Core Expert Profile</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
                            郭全中
                        </h1>

                        <div className="flex flex-col gap-3 text-stone-600 mb-8 font-medium">
                            <div className="flex items-center gap-2">
                                <TrendingUp size={18} className="text-stone-700" />
                                <span>传媒经济与管理专家 ｜ 互联网平台治理研究学者</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Search size={18} className="text-stone-700" />
                                <span>中央民族大学新闻与传播学院教授 ｜ 博士生导师</span>
                            </div>
                        </div>

                        <p className="text-lg text-stone-600 leading-relaxed font-light max-w-2xl border-l-4 border-stone-800 pl-6">
                            中国跨界研究的代表性学者。将管理学、制度经济学与新闻传播学深度融合。
                            <br /><br />
                            <span className="font-medium text-stone-900">如果说李希光是“行走的文明对话”，郭全中则是“手术刀式的商业剖析”。</span>
                        </p>
                    </div>

                    {/* Image Area */}
                    <div className="md:col-span-4 order-1 md:order-2 flex justify-end relative">
                        <div className="w-64 h-80 bg-stone-200 relative shadow-xl border border-stone-100 overflow-hidden">
                            <img
                                src="/郭全中.jpg"
                                alt="郭全中"
                                className="w-full h-full object-cover"
                            />
                            {/* Decorative elements representing Data/Structure */}
                            <div className="absolute -right-4 top-8 w-8 h-8 border-t border-r border-stone-400"></div>
                            <div className="absolute -left-4 bottom-8 w-8 h-8 border-b border-l border-stone-400"></div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Resume Section: The "Cross-over" Background */}
            <section id="resume" className="py-20 px-6 max-w-5xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-stone-900 mb-2">学研产“三栖”履历</h2>
                    <div className="h-1 w-12 bg-stone-800"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <ResumeCard
                        icon={<Landmark size={24} />}
                        title="顶尖学府背景"
                        items={[
                            "北京大学光华管理学院 博士后",
                            "中国人民大学商学院 管理学博士",
                            "兰州大学经济管理学院 硕士"
                        ]}
                    />
                    <ResumeCard
                        icon={<Briefcase size={24} />}
                        title="业界实战经验"
                        items={[
                            "曾任南方报业传媒集团战略运营部副主任",
                            "中国新闻出版传媒集团董秘/投资咨询部主任",
                            "多家传媒上市公司独立董事"
                        ]}
                    />
                    <ResumeCard
                        icon={<Award size={24} />}
                        title="核心智库职务"
                        items={[
                            "中央民族大学互联网平台企业发展与治理中心主任",
                            "中共中央党校（国家行政学院）高级经济师",
                            "外交部公共外交咨询委员会专家"
                        ]}
                    />
                </div>
            </section>

            {/* Methodology Section (The Surgical Analysis) */}
            <section id="methodology" className="py-24 px-6 bg-stone-100 border-y border-stone-200">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6">方法论：实战应用体系</h2>
                        <p className="text-stone-500 max-w-2xl mx-auto">
                            致力拆解传媒与商业的黑盒，通过<span className="text-stone-900 font-bold border-b border-stone-400 pb-1">管理学逻辑</span>寻找生存规律。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <MethodBlock
                            title="互联网平台“底层逻辑”分析"
                            desc="跳出内容层面，深入商业模式与技术架构。评估媒体/企业融合成功与否的关键，在于是否掌握了“稀缺资源”（如特殊接口、用户关系或核心技术）。"
                            tags={["平台化思维", "稀缺资源论", "连接效能"]}
                        />
                        <MethodBlock
                            title="制度经济学视角的治理研究"
                            desc="强调“机制改革优先于内容创新”。擅长运用激励机制、股权结构与利益相关者模型，研判组织的真实生存活力。"
                            tags={["激励机制", "利益博弈", "组织架构"]}
                        />
                        <MethodBlock
                            title="“三位一体”的实证研究范式"
                            desc="构建“理论抽象-深度案例-政策转化”闭环。不仅依赖公开财报，更强调通过实地调研获取一手内部经营数据（如南方报业、字节跳动案例）。"
                            tags={["深度调研", "内部数据", "闭环研究"]}
                        />
                        <MethodBlock
                            title="数据驱动与AI趋势研判"
                            desc="关注技术变量对传媒业的重构。提出评估GAI（生成式AI）冲击的指标体系，以及“智能算力+垂直大模型”替代传统流程的路径。"
                            tags={["生成式AI", "数字化转型", "存量优化"]}
                        />
                    </div>
                </div>
            </section>

            {/* Role Section */}
            <section id="role" className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-12 items-center">
                    <div className="md:col-span-5 bg-stone-900 p-8 text-stone-300">
                        <div className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-4">In This Project</div>
                        <h3 className="text-2xl font-serif text-white mb-6">首席商业逻辑顾问<br />制度分析师</h3>
                        <GitMerge size={40} className="text-stone-600 mb-4" />
                        <p className="text-sm leading-relaxed">
                            在「温州商脉」工程中，郭全中教授不负责“讲故事”，而是负责“拆解故事背后的生存逻辑”。
                        </p>
                    </div>

                    <div className="md:col-span-7 space-y-8">
                        <div>
                            <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-stone-900 rounded-full"></span>
                                家族企业的制度解构
                            </h4>
                            <p className="text-stone-600 text-sm">
                                运用制度经济学视角，分析第一代企业家在关键时刻的股权分配、利益协调与传承机制设计。
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-stone-900 rounded-full"></span>
                                商业模式的底层复盘
                            </h4>
                            <p className="text-stone-600 text-sm">
                                剥离时代红利滤镜，还原企业在特定历史阶段如何通过构建“稀缺资源”实现突围的底层逻辑。
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 bg-stone-900 rounded-full"></span>
                                企业档案的结构化治理
                            </h4>
                            <p className="text-stone-600 text-sm">
                                指导数字档案库的元数据结构设计，确保口述史料不仅可读，更可被检索、统计与复用。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Footer */}
            <section className="py-24 px-6 bg-stone-50 border-t border-stone-200 text-center">
                <div className="max-w-3xl mx-auto">
                    <Quote className="mx-auto text-stone-300 mb-8" size={48} />
                    <p className="text-xl font-serif text-stone-800 italic leading-loose mb-8">
                        “媒体融合也好，家族传承也罢，核心不在于表面的内容创新，而在于底层的**机制改革**与**稀缺资源**的重新配置。我们要留下的，是关于生存智慧的实证数据。”
                    </p>
                    <div className="text-sm font-bold text-stone-900 uppercase tracking-widest">—— 郭全中</div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-white border-t border-stone-100 text-center text-xs text-stone-400">
                &copy; 温州商脉口述史工程组 | 核心专家介绍
            </footer>
        </div>
    );
};

// Sub-components
const ResumeCard = ({ icon, title, items }) => (
    <div className="bg-white p-8 shadow-sm border-t-4 border-stone-300 hover:border-stone-800 transition-colors">
        <div className="text-stone-800 mb-6">{icon}</div>
        <h3 className="text-lg font-bold font-serif mb-4 text-stone-900">{title}</h3>
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="text-sm text-stone-600 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 bg-stone-400 rounded-full shrink-0"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const MethodBlock = ({ title, desc, tags }) => (
    <div className="bg-white p-8 border border-stone-200 hover:shadow-md transition-shadow">
        <h3 className="text-lg font-bold text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-600 text-sm leading-relaxed mb-6 h-20">
            {desc}
        </p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-stone-100 text-stone-500 text-xs font-medium">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export default ExpertProfileGuo;