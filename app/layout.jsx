import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CRUD App",
  description: "By Harry",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link> | <Link href='/create'>Create Task</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
