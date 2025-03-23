import type { Metadata } from "next";
import { Fredoka} from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400" ,"500", "600", "700"],
});


export const metadata: Metadata = {
  title: "DirectCodes - Sign Up",
  description: "Create your account on DirectCodes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fredoka.className} `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
