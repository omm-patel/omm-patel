import { Fraunces, Inter, Space_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Om Patel | Full Stack Developer Portfolio",
  description: "MCA student and Full Stack Developer building high-performance modern web experiences, business applications, and digital products using Next.js, React, Node.js, and MySQL.",
  keywords: ["Om Patel", "Full Stack Developer", "Next.js Developer", "React Developer", "Software Engineer Portfolio", "Luxury Web Design"],
  authors: [{ name: "Om Patel" }],
  openGraph: {
    title: "Om Patel | Full Stack Developer",
    description: "Premium developer portfolio displaying expertise in Next.js, React, Node.js, and MySQL database engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-bg-pure text-text-primary" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: "var(--bg-pure)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-lux)",
            borderRadius: "0px",
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.75rem",
          }
        }} />
      </body>
    </html>
  );
}
