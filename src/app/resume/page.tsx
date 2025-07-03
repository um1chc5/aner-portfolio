import ButtonWithHoverSound from "@/components/ButtonWithHoverSound";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import PageFadeTransition from "@/components/page-transition/page-fade-transition";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Resume() {
  return (
    <PageFadeTransition>
      <ButtonWithHoverSound>
        <Link
          href="/"
          className="hover:bg-primary-foreground pointer-events-auto absolute top-16 left-8 z-10 rounded-md border bg-white px-4 py-2 shadow"
        >
          ← Back to Home
        </Link>
      </ButtonWithHoverSound>
      <main className="relative flex min-h-screen items-start justify-center px-4 py-16">
        {/* Back to Home Button */}
        <section className="w-full max-w-2xl rounded-xl border border-gray-200 bg-white/80 p-8 text-justify shadow-xl backdrop-blur-md">
          {/* Header */}
          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              VU VUONG AN
            </h1>
            <p className="mt-1 text-lg font-semibold text-blue-600">
              FRONTEND DEVELOPER
            </p>
            <div className="mt-2 flex justify-center gap-4 text-sm text-gray-500">
              <ButtonWithHoverSound>
                <Link
                  href="https://github.com/YOUR_GITHUB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600"
                >
                  GitHub
                </Link>
              </ButtonWithHoverSound>
              <ButtonWithHoverSound>
                <Link
                  href="https://linkedin.com/in/YOUR_LINKEDIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-600"
                >
                  LinkedIn
                </Link>
              </ButtonWithHoverSound>
            </div>
          </header>

          {/* Overview */}
          <section className="mb-6">
            <h2 className="mb-1 text-base font-bold text-gray-700">OVERVIEW</h2>
            <p className="text-sm text-gray-700">
              Front-end developer with 1.5 years of experience building
              performant, user-friendly web applications. Recognized for
              delivering high-quality products on time, collaborating
              effectively in teams, and a passion for modern web technologies.
              Eager to learn, grow, and contribute to innovative projects.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="mb-2 text-base font-bold text-gray-700">
              EXPERIENCE
            </h2>
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">
                  Triplayz - Frontend Developer
                </span>
                <span className="text-xs text-gray-500">07/2024 - Present</span>
              </div>
              <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
                <li>
                  Developed Client Portal and Admin applications for CFD trading
                  platforms (Prop and FX), serving 5000+ users.
                </li>
                <li>
                  Built a chart system similar to TradingView for real-time
                  trading data visualization and interaction.
                </li>
                <li>
                  Utilized React, Nuxt, TypeScript, and various JavaScript
                  libraries to deliver robust solutions.
                </li>
                <li>
                  Fostered team collaboration by sharing ideas and supporting
                  teammates, contributing to a positive work environment.
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">
                  SmartOSC - Fullstack Fresher
                </span>
                <span className="text-xs text-gray-500">02/2024 - 06/2024</span>
              </div>
              <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
                <li>
                  Contributed to an e-commerce project as a fresher developer,
                  implementing features that improved user experience.
                </li>
                <li>
                  Built features with React, TypeScript, Shadcn, Tailwind CSS,
                  and Tanstack Query. cycle.
                </li>
                <li>
                  Developed APIs using Hono, PostgreSQL, and Kysely, ensuring
                  scalable and maintainable backend services.
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-900">
                  FPT Software - Web Development Intern
                </span>
                <span className="text-xs text-gray-500">12/2023 - 02/2024</span>
              </div>
              <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
                <li>
                  Learned Vue.js and contributed small features and bug fixes to
                  a real company project.
                </li>
                <li>
                  Worked on an IoT management platform for tracking restroom
                  usage metrics in large buildings.
                </li>
                <li>
                  Explored AWS services such as Lambda, API Gateway, and
                  DynamoDB to enhance platform scalability.
                </li>
              </ul>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="mb-1 text-base font-bold text-gray-700">SKILLS</h2>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>
                <span className="font-medium">Frontend:</span> React, Next.js,
                Vue.js, Nuxt.js, Redux, Zustand, Tailwind CSS, Shadcn UI,
                TanStack Query
              </li>
              <li>
                <span className="font-medium">Backend:</span> Express.js,
                NestJS, SQL, MongoDB
              </li>
              <li>
                <span className="font-medium">DevOps/Cloud:</span> Docker, AWS
                (Lambda, API Gateway, DynamoDB), Vercel
              </li>
              <li>
                <span className="font-medium">Tools:</span> Git, Jira, Monday,
                Figma
              </li>
              <li>
                <span className="font-medium">Languages:</span> TypeScript,
                JavaScript, HTML, CSS
              </li>
            </ul>
          </section>

          {/* Soft Skills */}
          <section className="mb-6">
            <h2 className="mb-1 text-base font-bold text-gray-700">
              SOFT SKILLS
            </h2>
            <ul className="list-inside list-disc text-sm text-gray-700">
              <li>
                Strong soft skills: English proficiency (TOEIC 875), teamwork,
                communication, problem-solving, adaptability, and eagerness to
                learn
              </li>
            </ul>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="mb-1 text-base font-bold text-gray-700">
              EDUCATION
            </h2>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>
                <span className="font-medium">FPT Software Academy</span> -
                Professional React Developer{" "}
                <span className="text-xs text-gray-500">03/2023 - 09/2023</span>
              </li>
              <li>
                <span className="font-medium">
                  Hanoi University of Pharmacy
                </span>{" "}
                - Pharmacy{" "}
                <span className="text-xs text-gray-500">09/2018 - 07/2023</span>
              </li>
            </ul>
          </section>

          {/* Contact & Certificate */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h2 className="mb-1 text-base font-bold text-gray-700">
                CONTACT
              </h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Phone:</span> +84 378995613
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  anvuvuong05@gmail.com
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-base font-bold text-gray-700">
                CERTIFICATE
              </h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  TOEIC (Reading and Listening) - Overall score:{" "}
                  <span className="font-medium">875</span>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </main>
      <div className="fixed top-0 -z-10 h-screen w-full overflow-hidden">
        <InteractiveGridPattern
          squares={[40, 40]}
          squaresClassName="hover:fill-blue-500"
          className={cn(
            "[mask-image:radial-gradient(720px_circle_at_center,white,transparent)]",
            "inset-x-0 skew-y-12",
          )}
        />
      </div>
    </PageFadeTransition>
  );
}
