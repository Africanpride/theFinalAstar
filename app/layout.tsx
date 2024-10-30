import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { bebas } from "@/config/fonts";


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
          "min-h-screen bg-background  antialiased md:m-4 ",
          bebas.className

        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
