import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhay Patel - Professsional Portfolio",
  description:
    "I am Abhay Patel a professional web developer and designer, I am eager to explore the web with you! Join me;)",
  openGraph: {
    title: "Abhay Patel - Professsional Portfolio",
    description:
      "I am Abhay Patel a professional web developer and designer, I am eager to explore the web with you! Join me;)",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="og:image"
        content="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihFKzNFnhtg3XgjicYywMtPrdVIy3VcLzLPB-5Hl32-aSYXRYHdJCRab7rwXG3EvEuvP-76qQJwLHsbXbfxvP5THqPcRDs7_YnlP4q-619vo_dpTNH0ORTwHuVnHbrsojEDIb-I7TYyhzKGFcKRSOHQFXdvmzYGnm9RLRU9Uq3Gd1RmwMBkqPQYPP5NkI/s16000/ogabh.png"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
