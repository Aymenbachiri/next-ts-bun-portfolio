import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/header/Navbar";
import SmoothScrollingProvider from "@/lib/providers/SmoothScrollingProvider";
import { Providers } from "@/lib/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Aymen Bachiri | MERN Stack & React Native Developer",
  description:
    "Experienced MERN stack and React Native developer creating innovative web and mobile applications. Explore my portfolio to see how I can bring your ideas to life.",
  keywords: [
    "MERN stack",
    "React Native",
    "Web Developer",
    "Mobile App Developer",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express.js",
    "React.js",
  ],
  authors: [{ name: "Aymen Bachiri" }],
  creator: "Aymen Bachiri",
  publisher: "Aymen Bachiri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.aymenbachiri.com", // Replace with your actual website URL
    title: "Aymen Bachiri | MERN Stack & React Native Developer",
    description:
      "Experienced MERN stack and React Native developer creating innovative web and mobile applications.",
    siteName: "Aymen Bachiri Portfolio",
    images: [
      {
        url: "/assets/images/aymen-bachiri.webp", // Replace with the path to your Open Graph image
        width: 1200,
        height: 630,
        alt: "Aymen Bachiri - MERN Stack & React Native Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aymen Bachiri | MERN Stack & React Native Developer",
    description:
      "Experienced MERN stack and React Native developer creating innovative web and mobile applications.",
    images: ["https://www.aymenbachiri.com/twitter-image.jpg"], // Replace with the path to your Twitter card image
    creator: "@AymenBachiri", // Replace with your Twitter handle
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raleway.className}>
        <SmoothScrollingProvider>
          <Providers>
            <Navbar />
            {children}
            <Toaster />
          </Providers>
        </SmoothScrollingProvider>
      </body>
    </html>
  );
}
