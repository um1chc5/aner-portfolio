import React from "react";

export default function Spinner() {
  return (
    <div className="bg-primary-foreground flex h-screen items-center justify-center space-x-2 dark:invert">
      <div className="h-5 w-5 animate-bounce rounded-full bg-black [animation-delay:-0.3s]" />
      <div className="h-5 w-5 animate-bounce rounded-full bg-black [animation-delay:-0.15s]" />
      <div className="h-5 w-5 animate-bounce rounded-full bg-black" />
    </div>
  );
}
