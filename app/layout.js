import { Inter, Lora } from 'next/font/google';
import { AuthProvider } from '@/context/AuthContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata = {
  title: 'Hayrat Indonesia - Yayasan Dakwah dan Kemanusiaan',
  description: 'Yayasan yang berkomitmen untuk menyebarkan dakwah Islam dan membantu sesama melalui berbagai program sosial dan kemanusiaan.',
  keywords: 'yayasan, kemanusiaan, dakwah, islam, sosial, Indonesia, Hayrat',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${lora.variable}`}>
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
