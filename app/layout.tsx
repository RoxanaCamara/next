import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./store/Providers";
import { Navigation } from "./components";

export const metadata: Metadata = {
  title: "Narela",
  description: "Generated by create next app",
};

const monserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${monserrat.className} bg-slate-400`}>
          <Navigation />
          <div className="pt-20">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
