import type { Metadata } from "next";
import "@/styles/reset.css";
import "@/styles/global.css";
import "@/styles/variable.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Sat.az",
  description: "sat.az",
};

type childType = { children: React.ReactNode };

const popFont = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: childType) {
  return (
    <html lang="en" className={popFont.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
