import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/organisms/ScrollProgress";
import { CursorGlow } from "@/components/organisms/CursorGlow";
import TransitionProvider from "@/components/TransitionProvider";

export const metadata: Metadata = {
  title: "Arpan's Portfolio",
  description: "Personal portfolio built with Next.js, Tailwind, and Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntuFont.className} min-h-screen flex flex-col antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <CursorGlow />
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
