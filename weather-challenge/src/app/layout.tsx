import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather forecast application for selected cities built with Next.js and OpenWeather API.",
  creator: "Thaís Neves",
  icons: {
    icon: "/weather-icons/cloudsun.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased" 
    >
      <body className={`${inter.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
