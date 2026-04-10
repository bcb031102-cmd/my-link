import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans relative overflow-x-hidden selection:bg-black selection:text-white">
      
      {/* Top Marquee Banner */}
      <div className="w-full border-b-[4px] border-black bg-white dark:bg-black dark:border-white py-3 overflow-hidden flex items-center shadow-[0_4px_0_0_#000] dark:shadow-[0_4px_0_0_#fff] z-20">
        <div className="animate-marquee whitespace-nowrap text-xl font-black uppercase tracking-widest text-black dark:text-white">
          <span className="mx-4">🔥 Vibe Coding</span>
          <span className="mx-4">✦</span>
          <span className="mx-4">Android Developer</span>
          <span className="mx-4">✦</span>
          <span className="mx-4">Visual Design</span>
          <span className="mx-4">✦</span>
          <span className="mx-4">Creative Thinker</span>
          <span className="mx-4">✦</span>
          <span className="mx-4">🔥 Vibe Coding</span>
          <span className="mx-4">✦</span>
          <span className="mx-4">Android Developer</span>
          <span className="mx-4">✦</span>
          <span className="mx-4">Visual Design</span>
          <span className="mx-4">✦</span>
          <span className="mx-4">Creative Thinker</span>
          <span className="mx-4">✦</span>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12 md:py-20 max-w-6xl flex-grow h-full relative z-10 w-full animate-pop-in">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
          
          {/* LEFT COLUMN - Profile Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="neo-box p-8 flex flex-col items-center md:items-start text-center md:text-left gap-6 bg-white dark:bg-neutral-900 rounded-none w-full">
              
              {/* Avatar */}
              <div className="relative w-40 h-40">
                <Image
                  src="/avatar.png"
                  alt="박채빈 프로필 아바타"
                  fill
                  className="object-cover rounded-none neo-avatar"
                  priority
                />
              </div>

              {/* Name and Bio */}
              <div className="flex flex-col gap-3">
                <h1 className="text-5xl md:text-6xl font-black tracking-tight text-black dark:text-white">
                  박채빈
                </h1>
                <p className="text-lg md:text-xl font-bold text-neutral-800 dark:text-neutral-200 leading-relaxed bg-yellow-200 dark:bg-yellow-600/30 inline-block px-2 py-1 border-2 border-black dark:border-white w-fit mx-auto md:mx-0">
                  Android Developer & Designer
                </p>
                <p className="text-base font-semibold text-neutral-700 dark:text-neutral-300 mt-2">
                  안녕하세요! 시각디자인과 대학생이자, 안드로이드 개발과 바이브 코딩을 탐구중입니다. 기술과 디자인의 결합을 좋아합니다. ✨
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                <Badge title="Android" color="bg-green-300 dark:bg-green-700" />
                <Badge title="Kotlin" color="bg-purple-300 dark:bg-purple-700" />
                <Badge title="Next.js" color="bg-blue-300 dark:bg-blue-700" />
                <Badge title="Figma" color="bg-pink-300 dark:bg-pink-700" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Links Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-3xl font-black uppercase tracking-tight text-black dark:text-white mb-2 md:text-left text-center">
              Explore Links 👀
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              
              <LinkCard 
                href="https://velog.io/@parkchaebin" 
                title="Velog Tech Blog" 
                description="안드로이드 개발 및 바이브 코딩 학습 기록"
                emoji="💻"
                bgColor="bg-[#20c997] dark:bg-teal-800"
                delayClass="delay-100"
                colSpan="sm:col-span-2"
              />
              
              <LinkCard 
                href="https://portfolio.com" 
                title="Portfolio" 
                description="최신 프로젝트 및 디자인 포트폴리오 작업물"
                emoji="✨"
                bgColor="bg-[#FF90E8] dark:bg-pink-800"
                delayClass="delay-200"
              />
              
              <LinkCard 
                href="https://behance.net" 
                title="Behance" 
                description="시각 디자인 및 UI/UX 포트폴리오"
                emoji="🎨"
                bgColor="bg-[#0057FF] text-white dark:bg-blue-800 dark:text-white"
                delayClass="delay-300"
              />
              
              <LinkCard 
                href="https://instagram.com" 
                title="Instagram" 
                description="일상, 작업 기록, 소통 및 영감 스크랩 모음"
                emoji="📸"
                bgColor="bg-[#FFC900] dark:bg-yellow-700"
                delayClass="delay-[400ms]"
              />

              <LinkCard 
                href="mailto:contact@example.com" 
                title="Contact Me" 
                description="협업 및 프로젝트 문의 이메일"
                emoji="💌"
                bgColor="bg-white dark:bg-gray-800"
                delayClass="delay-[500ms]"
                colSpan="sm:col-span-2"
              />

            </div>
          </div>
          
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-[4px] border-black bg-white dark:bg-black dark:border-white py-6 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p className="text-base font-black uppercase text-black dark:text-white">
            © 2026 박채빈. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
      
    </div>
  );
}

// Reusable Badge Component
function Badge({ title, color }: { title: string; color: string }) {
  return (
    <span className={`${color} border-2 border-black dark:border-white shadow-[2px_2px_0_0_#000] dark:shadow-[2px_2px_0_0_#fff] px-3 py-1 font-bold text-sm text-black dark:text-white`}>
      {title}
    </span>
  );
}

// Reusable Neobrutalist Link Card Component
function LinkCard({ 
  href, 
  title, 
  description, 
  emoji, 
  bgColor, 
  delayClass,
  colSpan = "sm:col-span-1"
}: { 
  href: string; 
  title: string; 
  description: string; 
  emoji: string; 
  bgColor: string; 
  delayClass: string;
  colSpan?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${colSpan} ${delayClass} animate-pop-in
        neo-box ${bgColor}
        flex flex-col justify-between p-6 gap-4
        hover:-translate-y-1 active:translate-y-1
      `}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-black tracking-tight">{title}</h3>
        <span className="text-3xl">{emoji}</span>
      </div>
      <p className="font-bold text-sm md:text-base opacity-90">
        {description}
      </p>
      
      <div className="mt-2 flex items-center gap-2 font-bold uppercase text-xs">
        <span className="border-b-2 border-current pb-0.5 inline-block">Visit Link</span>
        <span>→</span>
      </div>
    </a>
  );
}
