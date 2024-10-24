// src/app/layout.js (or layout.tsx for TypeScript)
export const metadata = {
    title: 'Your App',
    description: 'Simple, traffic-based pricing app',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  