import { ReactNode } from "react";
import "./globals.css"; // Tailwind & shadcn/ui

export const metadata = {
  title: "SafeSupport",
  description: "Role-based dashboards",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 antialiased">{children}</body>
    </html>
  );
}