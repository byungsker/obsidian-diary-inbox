const sampleEntry = `## 22:14\n\n오늘 [[은둥이]]랑 병원 다녀왔다. 생각보다 잘 버텨줘서 고마웠다.\n근데 [[회사]] 일은 계속 밀려서 불안하다. [[AI agent OS]]는 다시 정리해보고 싶다.\n\n### Metadata\n\n- mood: mixed\n- energy: low\n- linked: [[은둥이]], [[회사]], [[AI agent OS]]\n\n### Raw\n\n오늘 은둥이랑 병원 다녀왔다. 생각보다 잘 버텨줘서 고마웠다. 근데 회사 일은 계속 밀려서 불안하다. AI agent OS는 다시 정리해보고 싶다.`;

const features = [
  "웹/앱/메신저에서 빠르게 일기 capture",
  "Obsidian Vault에 Markdown으로 저장",
  "사용자 사전 기반 자동 wikilink",
  "Raw 원문 보존 + OKF 호환 frontmatter",
  "주간 회고와 LifeWiki 대시보드로 확장",
];

const roadmap = [
  ["v0.1", "Capture", "Vault 설정, daily note append, 원문 보존"],
  ["v0.2", "Link", "dictionary 기반 wikilink, people/topics note"],
  ["v0.3", "Review", "weekly review, 링크/감정/태그 빈도"],
  ["v0.4", "LifeWiki", "Home, People, Projects, Emotions index"],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f2e8] text-slate-900">
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:px-10 lg:py-16">
        <div className="min-w-0 flex flex-col justify-center">
          <p className="mb-5 inline-flex max-w-full rounded-full border border-purple-200 bg-white/70 px-3 py-2 text-xs font-semibold text-purple-800 shadow-sm sm:px-4 sm:text-sm">
            Obsidian-native Life Wiki Builder
          </p>
          <h1 className="break-keep text-[2.35rem] font-black leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            아무 데서나 하루를 적으면,
            <span className="block break-words text-purple-800">내 Obsidian에 삶의 위키가 쌓입니다.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
            Obsidian Diary Inbox는 짧은 일기를 로컬 Vault에 Markdown으로 저장하고, 사람·프로젝트·감정·아이디어를 wikilink로 연결해 다시 읽히는 기록 시스템을 만듭니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="rounded-2xl bg-slate-950 px-6 py-4 text-center font-bold text-white shadow-xl shadow-slate-900/20" href="#preview">
              MVP 미리보기
            </a>
            <a className="rounded-2xl border border-slate-300 bg-white/70 px-6 py-4 text-center font-bold text-slate-900" href="#roadmap">
              로드맵 보기
            </a>
          </div>
        </div>

        <div id="preview" className="min-w-0 rounded-[1.5rem] border border-white/70 bg-white/80 p-3 shadow-2xl shadow-purple-950/10 backdrop-blur sm:rounded-[2rem] sm:p-5">
          <div className="rounded-3xl bg-slate-950 p-4 text-white sm:p-5">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-purple-200">Quick Capture</p>
                <h2 className="text-2xl font-bold">오늘의 기록</h2>
              </div>
              <span className="w-fit rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">AI optional</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
              오늘 은둥이랑 병원 다녀왔다. 생각보다 잘 버텨줘서 고마웠다. 근데 회사 일은 계속 밀려서 불안하다. AI agent OS는 다시 정리해보고 싶다.
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-slate-400">Mood</p>
                <p className="font-bold">mixed</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-3">
                <p className="text-slate-400">Energy</p>
                <p className="font-bold">low</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-2xl bg-purple-500 px-5 py-4 font-black text-white" type="button">
              Save to Obsidian
            </button>
          </div>
          <pre className="mt-5 max-h-[360px] min-w-0 overflow-auto whitespace-pre-wrap break-words rounded-3xl bg-[#1f2933] p-4 text-xs leading-6 text-emerald-100 sm:p-5">
            {sampleEntry}
          </pre>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white/80 p-6 shadow-lg shadow-slate-900/5 md:col-span-1">
            <h2 className="text-2xl font-black">제품 원칙</h2>
            <p className="mt-3 leading-7 text-slate-700">
              AI가 내 삶을 대신 기억하는 게 아니라, 내 기록이 내 손 안에서 오래 살아남고 연결되게 합니다.
            </p>
          </div>
          <div className="rounded-3xl bg-white/80 p-6 shadow-lg shadow-slate-900/5 md:col-span-2">
            <h2 className="text-2xl font-black">MVP 기능</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-700">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-purple-300">Roadmap</p>
          <h2 className="mt-3 break-keep text-3xl font-black sm:text-4xl">일기 앱이 아니라 LifeWiki ingestion layer로 시작합니다.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {roadmap.map(([version, title, description]) => (
              <article key={version} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold text-purple-200">{version}</p>
                <h3 className="mt-2 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
