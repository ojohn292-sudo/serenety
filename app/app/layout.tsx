import './globals.css';
import { Toaster } from 'sonner';

export const metadata = { title: 'Serenity' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-stone-900 antialiased">
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
