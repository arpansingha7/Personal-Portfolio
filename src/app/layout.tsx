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
import { Starfield } from "@/components/organisms/Starfield";

export const metadata: Metadata = {
  title: "Arpan Singha | Software Engineer & Data Scientist",
  description: "Dual-degree student at IIT Madras & Parul University. Specializing in AI, data pipelines, and scalable web applications.",
  keywords: ["Arpan Singha", "Software Engineer", "Data Scientist", "IIT Madras", "Portfolio"],
  authors: [{ name: "Arpan Singha" }],
  openGraph: {
    title: "Arpan Singha | SWE & Data Scientist",
    description: "CS & Data Science student building elegant software at the intersection of AI, cloud, and the web.",
    url: "https://arpansingha.com", 
    siteName: "Arpan Singha Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpan Singha | Software Engineer",
    description: "CS & Data Science student building elegant software at the intersection of AI, cloud, and the web.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${ubuntuFont.className} min-h-screen flex flex-col antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Starfield />
          <ScrollProgress />
          <CursorGlow />
          <main className="min-h-screen w-full flex flex-col">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
