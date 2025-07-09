"use client";

import Spinner from "@/components/spinner";
import SplitTextAnimation from "@/components/split-text-animation";
import { cn } from "@/lib/utils";
import { Oooh_Baby } from "next/font/google";
import Image from "next/image";
import { useState, useCallback } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const ooohBaby = Oooh_Baby({
  subsets: ["vietnamese"],
  weight: ["400"],
});

export default function InviteKenh() {
  const [pending, setPending] = useState(true);
  const totalImages = 3; // update this if you add/remove images
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = useCallback(() => {
    setLoadedCount((count) => {
      const newCount = count + 1;
      if (newCount === totalImages) setPending(false);
      return newCount;
    });
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center">
      {/* Main content */}
      <div className="absolute top-1/2 left-1/2 h-4/5 w-[400px] -translate-x-1/2 -translate-y-1/2 rotate-6 shadow-xl">
        <Image
          src="/images/paper-tx-2.jpg"
          alt="bg"
          fill
          className="object-cover"
          onLoad={handleImageLoad}
        />
      </div>
      <div
        className={`relative z-10 h-4/5 w-[400px] p-6 text-lg shadow-xl ${ooohBaby.className}`}
      >
        <div>
          <Image
            src="/images/paper-tx-2.jpg"
            alt="bg"
            fill
            onLoad={handleImageLoad}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <Link
              href="https://www.cgv.vn/default/dan-ca-go.html"
              target="_blank"
            >
              <Image
                src="/images/dancago-banner.jpg"
                alt="dancago-banner"
                width={340}
                height={100}
                className="relative mx-auto mb-4 rounded"
                onLoad={handleImageLoad}
              />
            </Link>
          </motion.div>
          <SplitTextAnimation>
            <h2 className="mb-2 text-center text-2xl font-semibold">Invite</h2>
          </SplitTextAnimation>
          <SplitTextAnimation>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            necessitatibus incidunt saepe voluptate quo eius voluptates sed
            omnis similique. Vitae labore ratione iure et officiis possimus sunt
            iusto delectus neque. Ex optio dolore reiciendis quod ducimus
            perspiciatis illo vel pariatur dicta. Voluptate laboriosam labore
            adipisci quis explicabo ipsum pariatur eligendi odit asperiores,
            numquam suscipit magnam.
          </SplitTextAnimation>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <div className="flex items-center justify-center">
              <p className="z-10">Xem lịch chiếu tại</p>
              <Link
                href="https://www.cgv.vn/default/dan-ca-go.html"
                target="_blank"
              >
                <Image
                  src="/images/cgv.png"
                  alt="dancago-banner"
                  width={100}
                  height={100}
                  className="relative"
                  onLoad={handleImageLoad}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Spinner overlay */}
      <div
        className={cn(
          "bg-primary-foreground pointer-events-none fixed inset-0 z-10 flex items-center justify-center transition-opacity duration-500",
          {
            "opacity-0": !pending,
          },
        )}
      >
        <Spinner />
      </div>
    </div>
  );
}
