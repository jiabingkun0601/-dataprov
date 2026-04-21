import React, { useState } from 'react';

const navItems = ['首页总览', '会前准备', '会中汇报', '会后总结', '资料中心', '系统管理'];

const kpiCards = [
  { name: '营业收入', value: '¥ 428.6 亿', hint: '同比 +6.8%' },
  { name: '利润总额', value: '¥ 37.2 亿', hint: '完成率 92.4%' },
  { name: '营业收现率', value: '89.7%', hint: '较上月 +1.9pct' },
  { name: '督办事项闭环率', value: '84.3%', hint: '本期提升 7 项' },
];

const lifecycleCards = [
  {
    title: '会前准备',
    points: ['数据采集任务', '异常指标预警', '专项材料上传', '定版数据查询'],
  },
  {
    title: '会中呈现',
    points: ['经营总览驾驶舱', '专题汇报', '层层穿透', '在线纪要'],
  },
  {
    title: '会后总结',
    points: ['纪要留痕', '督办追踪', '资料中心', '闭环复盘'],
  },
];

const topics = [
  '经济运行分析',
  '生产运行分析',
  '采购销售分析',
  '人工成本分析',
  '重点专项与督办',
];

const warnings = [
  {
    name: '主营收入完成率预警',
    level: '红',
    desc: '华北板块完成率低于序时进度 4.2pct。',
  },
  {
    name: '营业收现率预警',
    level: '黄',
    desc: '氯碱板块回款节奏偏慢，需重点跟踪。',
  },
  {
    name: '销售费用压降预警',
    level: '黄',
    desc: '二级企业费用管控波动超阈值。',
  },
];

const constructionRoadmap = [
  { step: '统一接入', desc: '统一采集集团及板块核心经营数据，确保口径一致。' },
  { step: '统一建模', desc: '围绕经营分析会场景沉淀指标体系与分析模型。' },
  { step: '统一分析', desc: '形成集团→板块→企业→装置/客户的穿透链路。' },
  { step: '统一行动', desc: '以督办闭环为抓手，推动问题整改与结果复盘。' },
];

const supervisionRows = [
  { item: '重点产品毛利修复方案', owner: '采购销售部', due: '2026-04-18', status: '推进中' },
  { item: '装置能耗异常专项排查', owner: '生产技术部', due: '2026-04-20', status: '待启动' },
  { item: '应收账款压降行动复盘', owner: '财务管理部', due: '2026-04-15', status: '已完成' },
  { item: '重点客户结构优化清单', owner: '企管法务部', due: '2026-04-22', status: '推进中' },
];

function levelClass(level) {
  return level === '红'
    ? 'bg-red-500/20 text-red-300 border-red-400/40'
    : 'bg-amber-500/20 text-amber-300 border-amber-400/40';
}

export default function BohuaJingfenhuiPagePrototype() {
  const [activeNav, setActiveNav] = useState('首页总览');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-8">
      <div className="mx-auto max-w-[1600px] space-y-6">
        <header className="rounded-3xl border border-cyan-900/60 bg-slate-900/80 px-6 py-5 shadow-[0_0_40px_rgba(6,182,212,0.08)] backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-cyan-300/90 text-sm tracking-[0.2em] uppercase">Bohua Group · Digital Operation</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-wide">数字化经营分析会平台</h1>
              <p className="mt-2 text-slate-300">以经营为中心，以结果为导向</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-3">
                <p className="text-slate-400">当前会议周期</p>
                <p className="mt-1 text-cyan-200 font-medium">2026年4月经营分析会（第2周）</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-3">
                <p className="text-slate-400">会前准备完成度</p>
                <p className="mt-1 text-cyan-200 font-medium">91%</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[240px_1fr_320px]">
          <aside className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="px-2 text-xs uppercase tracking-[0.25em] text-slate-400">导航</p>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveNav(item)}
                  className={`w-full rounded-2xl border px-3 py-2 text-left text-sm transition-all duration-200 ${
                    activeNav === item
                      ? 'border-cyan-500/60 bg-cyan-500/15 text-cyan-100'
                      : 'border-slate-700 bg-slate-800/40 text-slate-300 hover:-translate-y-0.5 hover:border-cyan-700/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="rounded-2xl border border-cyan-800/40 bg-slate-800/60 p-4">
              <p className="text-sm text-slate-300">预警摘要</p>
              <p className="mt-2 text-2xl font-semibold text-cyan-200">3 条</p>
              <p className="mt-1 text-xs text-slate-400">红色预警 1 条，黄色预警 2 条</p>
            </div>
          </aside>

          <main className="space-y-6">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {kpiCards.map((card) => (
                <article
                  key={card.name}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-700/70"
                >
                  <p className="text-sm text-slate-400">{card.name}</p>
                  <p className="mt-3 text-2xl font-semibold text-cyan-100">{card.value}</p>
                  <p className="mt-2 text-sm text-cyan-300/80">{card.hint}</p>
                </article>
              ))}
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-lg font-medium">会议全生命周期</h2>
              <div className="mt-4 grid gap-4 xl:grid-cols-3">
                {lifecycleCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-700/70"
                  >
                    <h3 className="text-cyan-200 font-medium">{card.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-300">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-lg font-medium">会中专题分析</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {topics.map((topic) => (
                  <article
                    key={topic}
                    className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4 transition-all duration-200 hover:-translate-y-1 hover:border-cyan-700/70"
                  >
                    <h3 className="font-medium text-cyan-100">{topic}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      支持集团→板块→二级企业→产品/客户/装置等维度穿透分析
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium">会后督办事项</h2>
                <button
                  type="button"
                  className="rounded-xl border border-cyan-700/60 bg-cyan-600/10 px-3 py-1.5 text-sm text-cyan-200 transition hover:-translate-y-0.5 hover:bg-cyan-500/20"
                >
                  新建督办
                </button>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700 text-slate-400">
                      <th className="px-3 py-3 text-left font-medium">事项名称</th>
                      <th className="px-3 py-3 text-left font-medium">责任部门</th>
                      <th className="px-3 py-3 text-left font-medium">截止日期</th>
                      <th className="px-3 py-3 text-left font-medium">当前状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    {supervisionRows.map((row) => (
                      <tr key={row.item} className="border-b border-slate-800/70 text-slate-200">
                        <td className="px-3 py-3">{row.item}</td>
                        <td className="px-3 py-3">{row.owner}</td>
                        <td className="px-3 py-3">{row.due}</td>
                        <td className="px-3 py-3">{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </main>

          <aside className="space-y-6">
            <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-lg font-medium">异常预警</h2>
              <div className="mt-4 space-y-3">
                {warnings.map((warning) => (
                  <article key={warning.name} className="rounded-2xl border border-slate-700 bg-slate-800/60 p-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-sm font-medium text-slate-100">{warning.name}</h3>
                      <span className={`rounded-full border px-2 py-0.5 text-xs ${levelClass(warning.level)}`}>
                        {warning.level}级
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400">{warning.desc}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <h2 className="text-lg font-medium">建设主线</h2>
              <div className="mt-4 space-y-3">
                {constructionRoadmap.map((item, index) => (
                  <article key={item.step} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-3">
                    <p className="text-cyan-200 text-sm font-medium">
                      {index + 1}. {item.step}
                    </p>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </article>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
