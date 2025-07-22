import '../styles/globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Portfólio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/letra.jpg" type="image/jpeg" />
        <title>Portfólio</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
