import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Logo } from "@/components/ui/logo";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Navbar } from "@/components/ui/navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Chetan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-neutral-200 dark:bg-neutral-950 h-full min-h-screen">
            <Link href="/">
              <Logo size={45} className="fixed top-10 left-10 z-50 dark:invert" />
            </Link>
            <DarkModeToggle />
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

