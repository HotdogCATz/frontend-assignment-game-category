import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/components/utils/scrollToTop";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-prompt", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wutthichai Game List",
  description: "A Frontend Assignment",
};

export function glowsGradient() {
  return (
    <div
      style={{
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100vw", 
        height: "100vh", 
        zIndex: -10,
        pointerEvents: "none",
        backgroundImage: `
          radial-gradient(circle at 20% 10%, rgba(0, 89, 255, 0.4) 0%, transparent 40%),
          radial-gradient(circle at 5% 20%, rgba(109, 174, 179, 0.25) 0%, transparent 35%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "85% 85%",
      }}
    />
  );
}

export function fireParticles() {
  const numParticles = 40;
  const particles = Array.from({ length: numParticles }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const size = Math.random() * 1 + 2;

    return (
      <div
        key={i}
        className="particle"
        style={{
          left: `${left}vw`,
          top: `${top}vh`,
          width: `${size}px`,
          height: `${size}px`,
          zIndex: 0,
        }}
      />
    );
  });

  return <>{particles}</>;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={prompt.variable}
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <ScrollToTop />
        <Navbar />
        <div className="flex justify-center mx-auto pt-16">
          <div className="z-1">{children}</div>
        </div>
        {glowsGradient()}
        {fireParticles()}
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100vw",
            height: "100vh",
            zIndex: -1,
            pointerEvents: "none",
          }}
        >
        </div>
      </body>
    </html>
  );
}
