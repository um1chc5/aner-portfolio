"use client";

import ButtonWithHoverSound from "@/components/audio/button-with-hover-sound";
import GridBackground from "@/components/grid-background";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import PageFadeTransition from "@/components/page-transition/page-fade-transition";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Resume() {
  const router = useRouter();

  return (
    <PageFadeTransition>
      <GridBackground className="fixed" />
      <ButtonWithHoverSound className="fixed top-4 right-4 z-10 md:top-10 md:right-10">
        <InteractiveHoverButton onClick={() => router.push("/")}>
          <p className="max-sm:hidden">Back to Home</p>
          <p className="sm:hidden">Back</p>
        </InteractiveHoverButton>
      </ButtonWithHoverSound>
      <main className="pointer-events-none relative flex min-h-screen items-start justify-center px-4 py-16 sm:px-4 sm:py-12 md:px-8 md:py-16">
        {/* Back to Home Button */}
        <section className="w-full max-w-md rounded-xl border border-gray-200 bg-white/60 p-4 shadow-xl backdrop-blur-md sm:max-w-lg sm:p-6 md:max-w-2xl md:p-8">
          {/* Header */}
          <header className="mb-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
              VU VUONG AN
            </h1>
            <p className="mt-1 text-base font-semibold text-blue-600 sm:text-lg">
              FRONTEND DEVELOPER
            </p>
            <div className="mt-2 flex flex-col justify-center gap-2 text-sm text-gray-500 sm:flex-row sm:gap-4">
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
            <p className="text-justify text-sm text-gray-700">
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
              <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-0">
                <span className="font-medium text-gray-900">
                  Triplayz - Frontend Developer
                </span>
                <span className="text-xs text-gray-500">07/2024 - Present</span>
              </div>
              <ul className="mt-1 list-inside list-disc space-y-1 text-sm text-gray-700">
                <li>
                  Developed Client Portal and Admin applications for CFD trading
                  platforms (Prop and FX).
                </li>
                <li>
                  Built a chart system similar to TradingView for real-time
                  trading data visualization and interaction, serving 4000+
                  users.
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
              <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-0">
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
              <div className="flex flex-col items-start justify-between gap-1 sm:flex-row sm:items-center sm:gap-0">
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
          <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <h2 className="mb-1 text-base font-bold text-gray-700">
                CONTACT
              </h2>
              <ul className="space-y-1 text-sm break-words text-gray-700">
                <li>
                  <span className="font-medium">Phone:</span> +84 378995613
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  <span className="break-all">anvuvuong05@gmail.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-1 text-base font-bold text-gray-700">
                CERTIFICATE
              </h2>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>
                  TOEIC (Reading and Listening):{" "}
                  <span className="font-medium">875</span>
                </li>
              </ul>
            </div>
          </section>
        </section>
      </main>
    </PageFadeTransition>
  );
}
