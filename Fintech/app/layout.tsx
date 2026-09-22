import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'ApexLoan AI — Student Loan & Financial Aid Optimization Engine 🚀',
  description: 'It’s not a loan tracker — it’s an AI wealth accelerant. Liquidate student debt 3.4x faster, eliminate hidden aid package penalties, and maximize grant subsidies automatically.',
  keywords: ['Student Loans', 'Financial Aid Optimization', 'FAFSA Parser', 'Loan Amortization', 'AI Wealth Accelerant', 'Refinance Alerts'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-space antialiased bg-white text-slate-900 selection:bg-purple-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
