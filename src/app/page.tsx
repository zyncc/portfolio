import { Container } from "@/components/container";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="home" className="h-screen">
        <div className="relative flex min-h-screen w-full items-center bg-black">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
            }}
          />
          <Container className="z-10">
            <div className="max-w-4xl">
              <h1 className="mb-3 text-center text-4xl font-bold text-white md:text-left md:text-5xl lg:text-6xl">
                Welcome to Zync
              </h1>
              <h2 className="text-accent-foreground lg:text-3x mb-4 text-center text-lg font-semibold md:text-left md:text-xl">
                Full Stack Developer
              </h2>
              <p className="mb-8 text-center text-base leading-relaxed md:text-left lg:text-lg">
                Specializing in Next.js, and cloud architecture with 2+ years of
                experience building scalable applications.
              </p>
              <div className="mb-8 flex gap-4 max-md:justify-center">
                <Button>
                  <Download />
                  Download Resume
                </Button>
                <Button variant="outline">View Projects</Button>
              </div>
              <div className="flex gap-6 max-md:justify-center">
                <Link href="mailto:contact@zync.dev">
                  <Mail className="h-6 w-6 cursor-none" />
                </Link>
                <Link href="https://github.com">
                  <Github className="h-6 w-6 cursor-none" />
                </Link>
                <Link href="https://linkedin.com">
                  <Linkedin className="h-6 w-6 cursor-none" />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section id="tech-stack" className="h-screen pt-[100px]">
        <Container>
          <h2 className="mb-10 text-4xl font-black md:text-5xl lg:text-6xl">
            My Tech Stack
          </h2>
          <Terminal>
            <TypingAnimation>&gt; bunx create chandan-stack</TypingAnimation>
            <AnimatedSpan delay={500} className="text-green-500">
              <span>✔ Bootstrapping developer profile</span>
            </AnimatedSpan>
            <AnimatedSpan delay={1000} className="text-green-500">
              <span>✔ Installing React ⚛️</span>
            </AnimatedSpan>
            <AnimatedSpan delay={1500} className="text-green-500">
              <span>✔ Installing Next.js 🚀</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2000} className="text-green-500">
              <span>✔ Setting up TypeScript 🟦</span>
            </AnimatedSpan>
            <AnimatedSpan delay={2500} className="text-green-500">
              <span>✔ Installing Tailwind CSS 🌬️</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3000} className="text-green-500">
              <span>✔ Adding ShadCN UI 💅</span>
            </AnimatedSpan>
            <AnimatedSpan delay={3500} className="text-green-500">
              <span>✔ Optimizing with Vite (optional) ⚡</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4000} className="text-green-500">
              <span>✔ Adding Prisma ORM 🧬</span>
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-green-500">
              <span>✔ Connected to MongoDB Atlas 🌍</span>
            </AnimatedSpan>
            <AnimatedSpan delay={5000} className="text-green-500">
              <span>✔ Adding Zustand for state 🧠</span>
            </AnimatedSpan>
            <AnimatedSpan delay={5500} className="text-green-500">
              <span>✔ Setting up Auth.js 🔐</span>
            </AnimatedSpan>
            <AnimatedSpan delay={6000} className="text-green-500">
              <span>✔ Configuring Zod for validation 🧪</span>
            </AnimatedSpan>
            <AnimatedSpan delay={6500} className="text-green-500">
              <span>✔ Creating reusable components 🧱</span>
            </AnimatedSpan>
            <AnimatedSpan delay={7000} className="text-blue-400">
              <span>ℹ Deploy target: Vercel / Cloudflare ☁️</span>
            </AnimatedSpan>
            <AnimatedSpan delay={7500} className="text-blue-400">
              <span>ℹ Checking GitHub API latency... 35ms 📡</span>
            </AnimatedSpan>
            <AnimatedSpan delay={8000} className="text-blue-400">
              <span>ℹ Ping vercel.app... 21ms</span>
            </AnimatedSpan>
            <AnimatedSpan delay={8500} className="text-green-500">
              <span>✔ Fetching latest memes... done ✅</span>
            </AnimatedSpan>
            <AnimatedSpan delay={9000} className="text-blue-400">
              <span>ℹ Enabling Dark Mode. You’re welcome. 🌑</span>
            </AnimatedSpan>
            <AnimatedSpan delay={9500} className="text-blue-400">
              <span>ℹ Installing productivity hacks...</span>
            </AnimatedSpan>
            <TypingAnimation delay={10500} className="text-blue-400">
              🎉 Welcome to Chandan’s Dev Terminal
            </TypingAnimation>
            <TypingAnimation delay={11000} className="text-blue-400">
              🧬 Powered by Zync
            </TypingAnimation>
          </Terminal>
        </Container>
      </section>
      <section className="h-screen"></section>
    </main>
  );
}
