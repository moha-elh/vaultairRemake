import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--f-serif" });
const sans = Geist({ subsets: ["latin"], weight: ["400", "600"], variable: "--f-sans" });
const mono = Geist_Mono({ subsets: ["latin"], weight: "400", variable: "--f-mono" });

export const metadata = {
  title: "Vaultaire · Local-first encrypted vault for iPhone & iPad",
  description:
    "Your Hidden album isn’t actually hidden. Vaultaire is. A local-first, AES-256 encrypted vault for iPhone and iPad, unlocked by a pattern. No account.",
  icons: { icon: "/img/favicon.svg" },
};

export const viewport = { themeColor: "#1e3aa7" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
