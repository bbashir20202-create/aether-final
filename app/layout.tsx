import './globals.css';

export const metadata = {
  title: 'Aether - Your Personal Agent',
  description: 'Cloud-based AI Agent with memory',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#09090b' }}>
        {children}
      </body>
    </html>
  );
}
