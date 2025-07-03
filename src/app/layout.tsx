import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/components/AudioProvider";
import SoundToggleButton from "@/components/SoundToggleButton";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "An Vu Vuong | Frontend Developer",
  description: "An Vu Vuong | Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$ ${nunitoSans.className} no-scrollbar min-h-screen antialiased`}
      >
        <AudioProvider>
          {children}
          <SoundToggleButton />
        </AudioProvider>
      </body>
    </html>
  );
}
