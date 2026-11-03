import type { Metadata } from "next";
import { Ubuntu, Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const ubuntuFont = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
});

const bebasNeueFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bebas-neue",
});

const dmSansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/organisms/ScrollProgress";
import { CursorGlow } from "@/components/organisms/CursorGlow";
import { Starfield } from "@/components/organisms/Starfield";

export const metadata: Metadata = {
  metadataBase: new URL("https://arpansingha.com"),
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
      <body suppressHydrationWarning className={`${ubuntuFont.className} ${ubuntuFont.variable} ${bebasNeueFont.variable} ${dmSansFont.variable} min-h-screen flex flex-col antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Starfield />
          <ScrollProgress />
          <CursorGlow />
          <div className="min-h-screen w-full flex flex-col relative">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
