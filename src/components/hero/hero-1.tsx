import { HyperText } from "@/components/magicui/hyper-text";
import Image from "next/image";
import Link from "next/link";
import PageFadeTransition from "../page-transition/page-fade-transition";
import ButtonWithHoverSound from "../audio/button-with-hover-sound";
import GridBackground from "../grid-background";

export default function Hero1() {
  return (
    <PageFadeTransition>
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-6">
        <div className="pointer-events-none z-10 w-full sm:w-2/3 md:w-2/3">
          {/* Greeting and Avatar */}
          <div className="flex flex-col gap-2">
            <HyperText duration={1500} className="text-6xl font-black">
              AN VU VUONG
            </HyperText>
            <p className="text-2xl font-semibold">Web Developer</p>
            <p className="text-muted-foreground mt-2 max-w-xl text-lg">
              Hi, I&apos;m a developer drifting through this vague idea of life.
              I love building beautiful and functional web experiences with
              modern frameworks and tools.
            </p>
          </div>

          <ButtonWithHoverSound>
            <Link
              href="/resume"
              className="pointer-events-auto mt-4 font-semibold hover:underline"
            >
              My Resume
            </Link>
          </ButtonWithHoverSound>

          {/* Contact Links */}
          <div className="pointer-events-auto mt-4 flex flex-row gap-6">
            <ButtonWithHoverSound>
              <Link
                href="https://www.facebook.com/um1chc5/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                Facebook
              </Link>
            </ButtonWithHoverSound>
            <ButtonWithHoverSound>
              <Link
                href="https://www.linkedin.com/in/an-vu-100a2b1a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                LinkedIn
              </Link>
            </ButtonWithHoverSound>
            <ButtonWithHoverSound>
              <Link
                href="https://github.com/um1chc5"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                GitHub
              </Link>
            </ButtonWithHoverSound>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <h2 className="mb-3 text-2xl font-bold">Tech Stack</h2>
            <div className="flex flex-wrap gap-4">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                width={48}
                height={48}
                alt="HTML5"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                width={48}
                height={48}
                alt="CSS3"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                width={48}
                height={48}
                alt="JavaScript"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width={48}
                height={48}
                alt="TypeScript"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={48}
                height={48}
                alt="React"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                width={48}
                height={48}
                alt="Next.js"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                width={48}
                height={48}
                alt="Vue.js"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"
                width={48}
                height={48}
                alt="Nuxt.js"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                width={48}
                height={48}
                alt="Tailwind CSS"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                width={48}
                height={48}
                alt="Git"
                unoptimized
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg"
                width={48}
                height={48}
                alt="NestJS"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
      <GridBackground />
    </PageFadeTransition>
  );
}
