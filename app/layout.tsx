import type { Metadata, Viewport } from "next";
import {
  Caveat,
  DM_Serif_Display,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guru Mahesh Kandukuri — Curious Engineer",
  description:
    "Personal portfolio of Guru Mahesh Kandukuri — B.Tech CSE (AIML) student, Web Development Intern, and software builder.",
  openGraph: {
    title: "Guru Mahesh Kandukuri — Curious Engineer",
    description:
      "Personal portfolio of Guru Mahesh Kandukuri — B.Tech CSE (AIML) student, Web Development Intern, and software builder.",
    type: "website",
    locale: "en_US",
    siteName: "Guru Mahesh Kandukuri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guru Mahesh Kandukuri — Curious Engineer",
    description:
      "Personal portfolio of Guru Mahesh Kandukuri — B.Tech CSE (AIML) student, Web Development Intern, and software builder.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1E8" },
    { media: "(prefers-color-scheme: dark)", color: "#1A1815" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${dmSerifDisplay.variable} ${inter.variable} ${jetbrainsMono.variable} ${caveat.variable}`}
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
