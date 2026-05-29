import "./globals.css";

export const metadata = {
  title: "Revive Youth Church",
  description: "Faith. Purpose. Community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
