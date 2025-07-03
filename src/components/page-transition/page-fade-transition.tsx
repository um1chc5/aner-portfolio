"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export default function PageFadeTransition({
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1, ease: "circInOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
