import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Anwesh Bindhani — Mining Engineer & Creative Polymath",
  description:
    "Portfolio of Anwesh Bindhani — Mining Engineering student at NIT Rourkela. Specializing in photo editing, digital art, video editing, motion graphics, and creative writing.",
  keywords: [
    "Anwesh Bindhani",
    "Mining Engineer",
    "NIT Rourkela",
    "Portfolio",
    "Photo Editing",
    "Video Editing",
    "Motion Graphics",
    "Creative Writing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
