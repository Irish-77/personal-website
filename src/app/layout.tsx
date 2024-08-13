import type { Metadata } from "next";
import { Inter as FontSans} from "next/font/google";
import "./globals.css";
import Providers from "./provider";
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "@/config/site";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  // metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="scroll-pt-[3.5rem]">
       <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}> {/*className={inter.className} */}
        <div className="flex flex-col h-screen justify-between">
            <Providers>
              <Navbar />
              <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-5">
                  {children}
                </div>
              </main>
              <Footer />
            </Providers>
        </div>
      </body>
    </html>
  );
}
