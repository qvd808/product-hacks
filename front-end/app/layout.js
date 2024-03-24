import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const dm_sans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  // weight: [300, 400],
  // style: ["normal", "italic"],
  // variable: "--font-roboto-mono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.variable}>{children}</body>
    </html>
  );
}
