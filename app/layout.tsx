import type { Metadata } from "next";
import "./globals.css";
import { Nunito as FontSans } from "next/font/google";
import { ThemeProvider } from "next-themes";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dr V Mandita",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/logo-brain.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="mt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
