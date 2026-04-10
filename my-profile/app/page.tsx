import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      <main className="glass-panel w-full max-w-md rounded-[2.5rem] p-10 flex flex-col items-center gap-6 text-center relative z-10 animate-pop-in">
        
        {/* Avatar Image with float animation */}
        <div className="relative w-32 h-32 animate-float">
          <Image
            src="/avatar.png"
            alt="박채빈 프로필 아바타"
            fill
            className="rounded-full object-cover shadow-xl border-4 border-white/60 dark:border-white/20"
            priority
          />
        </div>

        {/* Name and Bio */}
        <div className="flex flex-col gap-2 mt-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white drop-shadow-sm">
            박채빈
          </h1>
          <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 max-w-[280px] leading-relaxed mx-auto">
            안녕하세요! 바이브 코딩을 배우고 있는 시각디자인과 대학생입니다. ✨
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col gap-4 mt-4">
          <LinkButton 
            href="https://portfolio.com" 
            title="✨ Portfolio" 
            delayClass="delay-100" 
          />
          <LinkButton 
            href="https://behance.net" 
            title="🎨 Behance" 
            delayClass="delay-200" 
          />
          <LinkButton 
            href="https://instagram.com" 
            title="📸 Instagram" 
            delayClass="delay-300" 
          />
        </div>
        
        <div className="h-px w-20 bg-black/10 dark:bg-white/10 my-2 rounded-full" />
        
        <footer className="text-sm font-medium text-slate-500/80 dark:text-slate-400/80">
          © 2026 박채빈. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

// Reusable Link Button Component
function LinkButton({ href, title, delayClass }: { href: string; title: string; delayClass: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        animate-pop-in ${delayClass}
        w-full py-4 px-6 rounded-2xl
        bg-white/40 dark:bg-black/30
        border border-white/50 dark:border-white/10
        shadow-[0_4px_12px_rgba(0,0,0,0.05)] 
        backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:bg-white/60 dark:hover:bg-white/10
        active:scale-[0.98]
        flex items-center justify-center font-bold text-slate-700 dark:text-slate-200
      `}
    >
      {title}
    </a>
  );
}
