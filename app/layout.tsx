import "./globals.css";
import "@/styles/Pricing.css";
import "@/styles/fontawesome.css";

import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonyContextProvider from "@/contexts/TestimonyContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TestimonyContextProvider>
          <NavBar />
          {children}
          <Footer />
        </TestimonyContextProvider>
      </body>
    </html>
  );
}