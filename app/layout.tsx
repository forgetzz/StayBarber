import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/logo.jpeg",
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
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div>
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-5 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 mt-20">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/forgetzz"
                title="Forgetzz"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">DevPunk</p>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
