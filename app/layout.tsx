"use client";

import "./globals.css";
import { ReactNode, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" className="bg-slate-950">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-white`}>
        <AnimatePresence>
          {mounted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
