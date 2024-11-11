import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { poppins } from "@/config/fonts";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';



import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import Footer from "@/components/ui/Footer";
import { Navbar } from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen  antialiased bg-gray-100  font-sans overflow-x-hidden text-[16px] ",
          poppins.className
        )}
        
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <main>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />

          </main>
        </Providers>
      </body>
    </html>
  );
}
