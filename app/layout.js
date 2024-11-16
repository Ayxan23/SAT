import "@/styles/reset.css";
import "@/styles/global.css";
import "@/styles/variable.css";

import Footer from "@/components/footer";
import Header from "@/components/header/index";

import { Poppins } from "next/font/google";

export const metadata = {
  title: "Sat.az",
  description: "sat.az",
};

const popFont = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

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
