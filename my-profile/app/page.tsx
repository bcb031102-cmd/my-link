export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center gap-8 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
            박채빈
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 text-pretty">
            안녕하세요! 바이브 코딩을 배우고 있는 시각디자인과 대학생입니다.
          </p>
        </div>
        
        <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-800" />
        
        <footer className="text-sm text-zinc-500">
          © 2026 박채빈. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
