import { Geist, Geist_Mono } from "next/font/google";
import ClientRootLayout from "./client-root-layout";
import "./globals.css";

// Load Google fonts as CSS variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sapeksh Pareek | Full Stack Web Developer",
  description:
    "Hi, I'm Sapeksh Pareek, a full-stack developer passionate about crafting responsive websites and applications using the MERN stack. Explore my projects, book appointments, and connect to grow your brand online.",
  keywords: [
    "Sapeksh Pareek",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Portfolio",
    "Web Developer India",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Freelance Web Developer",
    "Responsive Website Developer",
  ],
  authors: [{ name: "Sapeksh Pareek", url: "https://sapekshpareek.vercel.app" }],
  creator: "Sapeksh Pareek",
  openGraph: {
    title: "Sapeksh Pareek | Full Stack Web Developer",
    description:
      "Explore Sapeksh's web development portfolio and projects built using the MERN stack. Book a consultation or learn more about how Sapeksh can help your business grow online.",
    url: "https://sapekshpareek.vercel.app",
    siteName: "Sapeksh Pareek Portfolio",
    images: [
      {
        url: "https://sapekshpareek.vercel.app/Hero.png",
        width: 1200,
        height: 630,
        alt: "Sapeksh Pareek Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
