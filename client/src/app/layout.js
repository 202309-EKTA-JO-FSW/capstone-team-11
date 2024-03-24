import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "EventMaster",
  description: "EventMaster is a platform for event management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
