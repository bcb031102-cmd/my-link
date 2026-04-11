import { dummyLinks } from "@/data/links";
import { LinkCard } from "@/components/LinkCard";

export default function Page() {
  // 최신순 정렬 (createdAt 내림차순)
  const sortedLinks = [...dummyLinks].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24 relative overflow-hidden">
      {/* 배경 장식 요소 */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full animate-pulse" />

      <div className="z-10 w-full max-w-md flex flex-col items-center gap-12">
        {/* 프로필 섹션 (헤더) */}
        <section className="flex flex-col items-center gap-4 text-center animate-in fade-in zoom-in duration-1000">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary p-1 shadow-2xl animate-float">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                ML
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
              MyLink
            </h1>
            <p className="text-muted-foreground font-medium">
              3초 만에 만드는 나만의 디지털 명함
            </p>
          </div>
        </section>

        {/* 링크 목록 섹션 */}
        <section className="w-full flex flex-col gap-4">
          {sortedLinks.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </section>

        {/* 푸터 섹션 */}
        <footer className="mt-8 animate-in fade-in duration-1000 delay-500">
          <p className="text-sm text-muted-foreground/60 font-medium">
            © 2024 MyLink. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
