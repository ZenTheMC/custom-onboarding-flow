import "./globals.css";

export const metadata = {
  title: "Custom Onboarding Flow",
  description: "Zealthy Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
