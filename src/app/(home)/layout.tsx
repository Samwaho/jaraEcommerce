import Footer from "@/components/footer/page";
import Header from "@/components/shared/header/page";
import { ClerkProvider } from "@clerk/nextjs";
// This default export is required in a new `pages/_app.js` file.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
