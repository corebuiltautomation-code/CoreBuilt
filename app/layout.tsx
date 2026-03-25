import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "CoreBuilt — Business Automation for Small Businesses",
  description:
    "We build automation systems that respond to your leads in seconds. Stop losing customers, start converting.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
